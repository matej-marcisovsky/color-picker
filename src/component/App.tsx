/// <reference types="../../node_modules/@types/chrome" />

import { debounce } from 'throttle-debounce';
import { Component, createRef } from "preact";

import Action from "../Action";
import Canvas from "../Canvas";
import Color from "../Color";

import Bar from "./Bar";
import Button from "./Button";
import Preview from "./Preview";

type Props = {
  onDeactivate: any
};

type State = {
  color: Color;
  isDown: boolean;
};

const DEBOUNCE_DELAY = 250;

export default class App extends Component<Props, State> {
  private barRef = createRef();
  private boundedOnTransitionEnd: any;
  private canvas: Canvas;
  private capturePromise: Promise<void>;
  private debouncedOnScroll: any;
  private debouncedOnResize: any;
  private isMoving: boolean = false;

  constructor(props: Props) {
    super(props);

    this.canvas = new Canvas(window.innerWidth, window.innerHeight);
    this.debouncedOnScroll = debounce(DEBOUNCE_DELAY, () => this.capture());
    this.debouncedOnResize = debounce(DEBOUNCE_DELAY, () => this.onResize());
    this.boundedOnTransitionEnd = this.onTransitionEnd.bind(this);

    this.capture();

    this.state = {
      color: new Color(0, 0, 0),
      isDown: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedOnScroll);
    window.addEventListener('resize', this.debouncedOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedOnScroll);
    window.removeEventListener('resize', this.debouncedOnResize);
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          zIndex: '9999',
          cursor: 'crosshair'
        }}
        onClick={(event) => this.onClick(event)}
        onMouseDown={(event) => this.onMouseDownOrUp(event, true)}
        onMouseUp={(event) => this.onMouseDownOrUp(event, false)}
        onMouseMove={(event) => this.onMouseMove(event)}>
        <Bar
          isDown={this.state.isDown}
          ref={this.barRef}>
          <Preview color={this.state.color.toHex()}/>
          <Button style={{ width: '7ch' }} onClick={(event) => this.onCopyClick(event, this.state.color.toHex())}>{this.state.color.toHex()}</Button>
          <Button style={{ width: '18ch' }} onClick={(event) => this.onCopyClick(event, this.state.color.toRgb())}>{this.state.color.toRgb()}</Button>
          <div>
            <Button style={{ fontSize: '24px', marginRight: '8px' }} onClick={(event) => this.onMove(event)}>{'\u{021c5}'}</Button>
            <Button style={{ fontSize: '24px' }} onClick={this.props.onDeactivate}>{'\u{02a2f}'}</Button>
          </div>
        </Bar>
      </div>
    );
  }

  onClick(event) {
    event.preventDefault();

    const { base: barElm } = this.barRef?.current;

    if (!barElm || barElm === event.target || barElm.contains(event.target as Node)) {
      return;
    }

    this.getColor(event.clientX, event.clientY);
  }

  onCopyClick(event, text: string) {
    event.preventDefault();

    navigator.clipboard.writeText(text);
  }

  onMouseDownOrUp(event, isMoving: boolean) {
    event.preventDefault();

    this.isMoving = isMoving;
  }

  onMouseMove(event) {
    if (!this.isMoving) {
      return;
    }

    event.preventDefault();

    this.getColor(event.clientX, event.clientY);
  }

  onMove(event) {
    event.preventDefault();

    const { base: barElm } = this.barRef?.current;

    if (!barElm) {
      return;
    }

    barElm.addEventListener('transitionend', this.boundedOnTransitionEnd);

    this.setState({
      isDown: !this.state.isDown
    });
  }

  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.capture();
  }

  onTransitionEnd() {
    const { base: barElm } = this.barRef?.current;

    if (!barElm) {
      return;
    }

    this.capture();

    barElm.removeEventListener('transitionend', this.boundedOnTransitionEnd);
  }

  private capture() {
    this.capturePromise = new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: Action.Capture }, (dataUrl) => {
        this.canvas.setDataUrl(dataUrl);
        resolve();
      });
    });
  }

  private getColor(x: number, y: number) {
    this.capturePromise.then(async () => {
      this.setState({
        color: await this.canvas.getColor(x, y)
      });
    });
  }
}

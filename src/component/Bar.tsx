import { Component } from "preact";

import { BAR_WIDTH, BAR_HEIGHT } from "../Constants";

type Props = {
  isDown: boolean;
};

const MARGIN = 16;
const PADDING = 8;

export default class Bar extends Component<Props> {
  render() {
    const style = {
      position: 'absolute',
      top: '0',
      left: `calc(50% - (${BAR_WIDTH}px / 2))`,
      display: 'flex',
      borderRadius: '6px',
      padding: `${PADDING}px`,
      width: `${BAR_WIDTH}px`,
      height: `${BAR_HEIGHT}px`,
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'white',
      boxSizing: 'content-box',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
      cursor: 'default',
      transform: `translateY(${MARGIN}px)`,
      transition: 'transform 250ms ease'
    };

    if (this.props.isDown) {
      style.transform = `translateY(${window.innerHeight - BAR_HEIGHT - MARGIN - 2 * PADDING}px)`;
    } else {
      style.transform = `translateY(${MARGIN}px)`;
    }
    
    return (
      <div
        style={style}>
        {this.props.children}
      </div>
    );
  }
}

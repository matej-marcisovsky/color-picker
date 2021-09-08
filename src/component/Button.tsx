import { Component, ComponentChildren } from "preact";

type Props = {
  onClick: any,
  children: ComponentChildren,
  style?: object
};

export default class Preview extends Component<Props> {
  render() {
    return (
      <button
        style={Object.assign({
          color: 'rgb(55, 65, 81)',
          fontFamily: 'monospace',
          fontSize: '16px',
          margin: '0',
          padding: '0',
          border: '0',
          background: 'transparent',
          cursor: 'pointer'
        }, this.props.style)}
        onClick={(event) => this.props.onClick(event)}>
        {this.props.children}
      </button>
    );
  }
}

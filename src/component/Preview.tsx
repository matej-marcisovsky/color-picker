import { Component } from "preact";

import { PREVIEW_SIZE } from "../Constants";

type Props = {
  color: string
};

export default class Preview extends Component<Props> {
  render() {
    return (
      <div
        style={{
          borderRadius: '50%',
          width: `${PREVIEW_SIZE}px`,
          height: `${PREVIEW_SIZE}px`,
          boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
          background: this.props.color
        }}/>
    );
  }
}

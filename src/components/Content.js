import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    return <div id="content">{this.props.children}</div>;
  }
}

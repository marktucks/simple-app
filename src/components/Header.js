import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    return <header>{this.props.children}</header>;
  }
}

import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <nav>{this.props.children}</nav>
      </ul>
    );
  }
}

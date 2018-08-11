import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuItem extends Component {
  render() {
    return (
      <NavLink exact to={this.props.path} activeClassName="selected">
        <li>{this.props.children}</li>
      </NavLink>
    );
  }
}

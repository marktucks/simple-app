import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import Content from "../components/Content";

import HomeView from "./HomeView";
import UsersView from "./UsersView";
import ProductsView from "./ProductsView";

export default () => {
  return (
    <BrowserRouter>
      <div id="main">
        <Menu>
          <MenuItem path="/">Home</MenuItem>
          <MenuItem path="/users">Users</MenuItem>
          <MenuItem path="/products">Products</MenuItem>
        </Menu>
        <Header>
          <h1>Welcome to my React App!</h1>
        </Header>
        <Content>
          <Route exact path="/" component={HomeView} />
          <Route path="/users" component={UsersView} />
          <Route path="/products" component={ProductsView} />
        </Content>
      </div>
    </BrowserRouter>
  );
};

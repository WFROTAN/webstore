import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../css/App.scss";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ProductBrowse from "../layouts/ProductBrowse";
import Login from "../layouts/Login";
import Wishlist from "../layouts/ShoppingBag";

var App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={ProductBrowse} />
          <Route path="/designer/" exact component={ProductBrowse} />
          <Route path="/designer/:brand" component={ProductBrowse} />
          <Route path="/category/" exact component={ProductBrowse} />
          <Route path="/category/:category" component={ProductBrowse} />
          <Route path="/gender/:gender" component={ProductBrowse} />
          <Route path="/login" exact component={Login} />
          <Route path="/shopping-bag" exact component={Wishlist} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

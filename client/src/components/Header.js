import React from "react";
import "../css/Header.scss";
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <div className="header">
        <div className="header__nav-left">
          <ul className="header__nav-items">
            <li><a href="/gender/Men">Men</a></li>
            <li><a href="/gender/Women">Women</a></li>
            <li>Sale</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="header__logo">
          SSENSE
        </div>
        <div className="header__nav-right">
          <ul className="header__nav-items">
            <li>English</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/login">Wishlist</Link></li>
            <li><Link to="/shopping-bag">Shopping Bag</Link></li>
          </ul>
        </div>
      </div>
      <div className="small-header">
      <div className="header__nav-left">
          <ul className="header__nav-items">
            <li><i class="icon ion-md-menu"></i></li>
            <li><i class="icon ion-md-search"></i></li>
          </ul>
        </div>
        <div className="header__logo">
          SSENSE
        </div>
        <div className="header__nav-right">
          <ul className="header__nav-items">
            <li><Link to="/login"><i class="icon ion-md-person"></i></Link></li>
            <li><Link to="/login"><i class="icon ion-md-cart"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

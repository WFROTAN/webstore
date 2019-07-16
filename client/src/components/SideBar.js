import React from "react";
import "../css/SideBar.scss";

var SideBar = props => {
  var categories = props.designers.map((designer) => {
    return <li><a href={`/designer/${designer}`}>{designer}</a></li>
  })

  return (
    <div className="sidebar">
      <div className="sidebar__all-categories">
        <span className="sidebar__heading"><a href='/category'>All Categories</a></span>
        <ul className="all-categories__items">
          <li><a href='/category/Accessories'>Accessories</a></li>
          <li><a href='/category/Bags'>Bags</a></li>
          <li><a href='/category/Clothing'>Clothing</a></li>
          <li><a href='/category/Shoes'>Shoes</a></li>
        </ul>
      </div>
      <div className="sidebar__all-designers">
        <span className="sidebar__heading"><a href='/designer'>All Designers</a></span>
        <ul className="all-designers__items">
          {categories}
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
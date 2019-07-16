import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ShoppingBag.scss';

var ShoppingBag = props => {
  return (
    <div className="shopping-bag">
      <span>Your shopping bag is empty.</span>
      <div className="shopping-bag__links">
        <div className="shopping-bag__links__men">
          <Link to="/gender/Men">Shop Men</Link>
        </div>
        <div className="shopping-bag__links__women">
          <Link to="/gender/Women">Shop Women</Link>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBag;
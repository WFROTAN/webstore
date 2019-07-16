import React from 'react';
import '../css/Sort.scss';

var Sort = props => {
  return (
    <div className="sort">
      <span className="sort__heading">Sort</span>
      <ul>
        <li>Latest arrivals</li>
        <li>Trending</li>
        <li>Price: Low to high</li>
        <li>Price: High to low</li>
      </ul>
    </div>
  )
}

export default Sort;
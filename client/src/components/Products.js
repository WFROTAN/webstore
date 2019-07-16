import React from 'react';
import '../css/Products.scss';

var Products = props => {
  var products = props.products.map((product, index, arr) => {
    return (
      <figure>
        <img src={require(`../../public/images/${product.image.image1}`)} alt=""/>
        <figcaption>
          <p className="brand">{product.brand}</p>
          <p className="productName">{product.productName}</p>
          <p className="price">${product.price}</p>
        </figcaption>
      </figure>
    );
  });

  return (
    <div className="products">
      {products}
    </div>
  )
}

export default Products;
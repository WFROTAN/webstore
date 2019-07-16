import React from "react";
import axios from "axios";

import "../css/ProductBrowse.scss";
import SideBar from "../components/SideBar";
import Products from "../components/Products";
import Sort from "../components/Sort";

class ProductBrowse extends React.Component {
  state = { products: [], designers: [] };

  componentDidMount() {
    
    var url;
    var brand = this.props.match.params.brand || "";
    var category = this.props.match.params.category || "";
    var gender = this.props.match.params.gender || "";

    if (this.props.match.path === "/category/:category" || "/category/") {
      url = `/mongodb/category/${category}`;
    }
    if (this.props.match.path === "/designer/:brand") {
      url = `/mongodb/products/${brand}`;
    }
    if (this.props.match.path === "/gender/:gender") {
      url = `/mongodb/gender/${gender}`;
    }

    // Get products
    (async () => {
      await axios.get(`/mongodb/designers/`).then(response => {
        this.setState({
          designers: response.data.map(res => {
            return res;
          })
        });
      });
    })();
    
    // Get designers
    (async () => {
      await axios.get(`${url}`).then(response => {
        this.setState({
          products: response.data.map(res => {
            return res;
          })
        });
      });
    })();
  }

  render() {
    return (
      <div className="main-content">
        <div className="main-content__sidebar">
          <SideBar designers={this.state.designers} />
        </div>
        <div className="main-content__products">
          <Products products={this.state.products} />
        </div>
        <div className="main-content__sort">
          <Sort />
        </div>
      </div>
    );
  }
}

export default ProductBrowse;

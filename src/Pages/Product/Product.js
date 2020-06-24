import React, { Component } from "react";
import GoodsList from "Components/GoodsList";
import "./Product.scss";

class Product extends Component {
  state = {
    product: null,
    loading: true,
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "productData.json")
      .then((res) => res.json())
      .then((data) => this.setState({ product: data }))
      .catch((error) => console.log("Error occurred", error))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, product } = this.state;
    return loading ? null : (
      <div className="Product">
        <GoodsList
          category_name={product.category_name}
          category_id={product.category_id}
          sub_category={product.sub_category}
          results={product.results}
        />
      </div>
    );
  }
}

export default Product;

import React, { Component } from "react";
import GoodsList from "Components/GoodsList";
import "./Product.scss";

import { DATA_PATH } from "config";

class Product extends Component {
  constructor(props) {
    super(props);
    const {
      location: { search },
    } = this.props;
    this.state = {
      loading: true,
      product: [],
      count: [],
      categoryCode: search.split("=")[1],
    };
  }

  componentDidMount() {
    fetch(DATA_PATH + "productData.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ product: data.product, count: data.count })
      )
      .catch((error) => console.log("Error occurred", error))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, product, count, categoryCode } = this.state;
    return loading && product.length === 0 ? null : (
      <div className="Product">
        <GoodsList
          productList={product}
          counts={count}
          categoryCode={categoryCode}
        />
      </div>
    );
  }
}

export default Product;

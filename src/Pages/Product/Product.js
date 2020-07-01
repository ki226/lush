import React, { Component } from "react";
import GoodsList from "Components/GoodsList";
import "./Product.scss";

import { DATA_PATH, URL_PATH } from "config";

const COUNT = 28;

class Product extends Component {
  constructor(props) {
    super(props);
    const {
      location: { search },
    } = this.props;
    this.state = {
      product: [],
      count: [],
      page: new URLSearchParams(search).get("page"),
      categoryCode: new URLSearchParams(search).get("categoryCode")
        ? new URLSearchParams(search).get("categoryCode")
        : new URLSearchParams(search).get("subCategoryCode"),
      pagesNumArr: [],
    };
  }

  componentDidMount() {
    const { page, categoryCode } = this.state;
    const categoryCodeKey =
      categoryCode.length === 6 ? "categoryCode" : "subCategoryCode";
    fetch(
      // `${URL_PATH}goods/goods-list?&page=${page}&${categoryCodeKey}=${categoryCode}`
      DATA_PATH + "productData.json"
    )
      .then((res) => res.json())
      .then(({ product, count }) => this.setState({ product, count }))
      .catch((error) => console.log("Error occurred", error));
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search: currSearch },
    } = this.props;

    if (prevSearch !== currSearch) {
      const page = new URLSearchParams(currSearch).get("page");
      const categoryCode = new URLSearchParams(currSearch).get("categoryCode")
        ? new URLSearchParams(currSearch).get("categoryCode")
        : new URLSearchParams(currSearch).get("subCategoryCode");
      const categoryCodeKey =
        categoryCode.length === 6 ? "categoryCode" : "subCategoryCode";
      fetch(
        `${URL_PATH}goods/goods-list?&page=${page}&${categoryCodeKey}=${categoryCode}`
      )
        .then((res) => res.json())
        .then(({ product, count }) =>
          this.setState({
            product,
            count,
            categoryCode: categoryCode,
          })
        )
        .catch((error) => console.log("Error occurred", error));
    }
  }

  render() {
    const { product, count, categoryCode } = this.state;
    return product.length === 0 ? null : (
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

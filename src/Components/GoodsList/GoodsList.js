import React, { Component } from "react";
import { Link } from "react-router-dom";
import Goods from "Components/Goods";
import ShoppingCartModal from "./ShoppingCartModal";
import ConfirmModal from "./ConfirmModal";
import "./GoodsList.scss";

class GoodsList extends Component {
  state = {
    isCartModalOn: false,
    isConfirmModalOn: false,
    currentProductNumber: "",
  };

  toggleCartModal = (product_number) => {
    this.setState({
      isCartModalOn: !this.state.isCartModalOn,
      currentProductNumber: this.state.isCartModalOn ? "" : product_number,
    });
  };

  toggleConfirmModal = () => {
    this.setState({ isConfirmModalOn: !this.state.isConfirmModalOn });
  };

  render() {
    const {
      productList,
      counts,
      categoryCodeKey,
      categoryCode,
      currentPage,
      pagesNumArr,
    } = this.props;
    return (
      <div className="GoodsList">
        <div className="heading">
          <h2 className="category-name">
            {
              counts.filter((count) => count.category_code === categoryCode)[0]
                .category_name
            }
          </h2>
        </div>
        <ul className="lower-category">
          {counts.map((count) => (
            <li key={count.category_code}>
              <span>
                <Link
                  to={
                    categoryCode.length === 6
                      ? `product?page=1&categoryCode=${count.category_code}`
                      : `product?page=1&subCategoryCode=${count.category_code}`
                  }
                  className={count.category_code === categoryCode ? "on" : null}
                >
                  {count.category_code.length === 6
                    ? "전체"
                    : count.category_name}
                  {`(${count.total})`}
                </Link>
              </span>
            </li>
          ))}
        </ul>
        <div className="goods-list">
          {productList.map((product) => (
            <Goods
              key={product.product_number}
              product_number={product.product_number}
              product_name={product.product_name}
              image={product.image}
              price={product.price}
              stock={product.stock}
              is_new={product.is_new}
              is_vegan={product.is_vegan}
              hash_tag={product.hash_tag}
              sub_ctgry_name={product.sub_ctgry_name}
              sub_ctgry_code={product.sub_ctgry_code}
              toggleCartModal={this.toggleCartModal}
            />
          ))}
        </div>
        <nav className="pagination">
          <ul>
            {pagesNumArr.map((page) => (
              <Link
                key={page}
                onClick={() => window.scrollTo(0, 0)}
                to={`/product?page=${
                  page + 1
                }&${categoryCodeKey}=${categoryCode}`}
              >
                <li className={page + 1 === +currentPage ? "on" : ""}>
                  {page + 1}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {this.state.currentProductNumber && (
          <ShoppingCartModal
            product={
              productList.filter(
                (product) =>
                  product.product_number === this.state.currentProductNumber
              )[0]
            }
            isCartModalOn={this.state.isCartModalOn}
            toggleCartModal={this.toggleCartModal}
            toggleConfirmModal={this.toggleConfirmModal}
          />
        )}
        <ConfirmModal
          isConfirmModalOn={this.state.isConfirmModalOn}
          toggleConfirmModal={this.toggleConfirmModal}
        />
      </div>
    );
  }
}

export default GoodsList;

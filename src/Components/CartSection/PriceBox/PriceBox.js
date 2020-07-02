import React, { Component } from "react";
import "./PriceBox.scss";

class PriceBox extends Component {
  render() {
    const { items, deliveryCharge } = this.props;

    const count =
      items.length > 0 &&
      items.filter((item) => item.selected === true).length > 0
        ? items
            .filter((item) => item.selected === true)
            .map((item) => item.count)
            .reduce((acc, curr) => acc + curr)
        : 0;

    const totalPrice =
      items.length > 0 &&
      items.filter((item) => item.selected === true).length > 0
        ? items
            .filter((item) => item.selected === true)
            .map((item) => item.count * item.price)
            .reduce((acc, curr) => acc + curr)
        : 0;

    return (
      <div className="PriceBox">
        <span>
          총 {count.toLocaleString()}
          개의 금액
        </span>
        <span className="sign">￦</span>
        <span className="goods-price">{totalPrice.toLocaleString()}</span>
        <span className="sign">+</span>
        <span className="delivery">배송비</span>
        <span className="sign">￦</span>
        <span className="delivery-charge">
          {count > 0 ? deliveryCharge.toLocaleString() : 0}
        </span>
        <span className="sign">=</span>
        <span className="total">
          총 주문금액
          <span className="total-price">
            <span className="sign">￦ </span>
            {(totalPrice + (count > 0 ? deliveryCharge : 0)).toLocaleString()}
          </span>
        </span>
      </div>
    );
  }
}

export default PriceBox;

import React, { Component } from "react";
import Table from "./Table";
import PriceBox from "./PriceBox";
import CustomerInfo from "./CustomerInfo";
import "./CartSection.scss";

const SHIPPING_CHARGE = 2500;
const MINIMUM_PURCHASE = 30000;

class CartSection extends Component {
  render() {
    const {
      isMember,
      items,
      counterHandler,
      checkboxHandler,
      checkChildrenHandler,
      deleteItems,
      makeOrder,
    } = this.props;

    const deliveryCharge =
      items.length > 0 &&
      items.filter((item) => item.selected === true).length > 0 &&
      isMember &&
      items
        .filter((item) => item.selected === true)
        .map((item) => item.count * item.price)
        .reduce((acc, curr) => acc + curr) >= MINIMUM_PURCHASE
        ? 0
        : SHIPPING_CHARGE;

    return (
      <div className="CartSection">
        <div className="heading">
          <h2 className="title">제품</h2>
          <span className="notice">
            {/* 바우처는 온라인으로 제공되므로, 실물이 배송되는 제품과는 별도로
            결제를 진행할 수 있습니다. */}
          </span>
        </div>
        {items.length > 0 ? (
          <Table
            items={items}
            deliveryCharge={deliveryCharge}
            counterHandler={counterHandler}
            checkboxHandler={checkboxHandler}
            checkChildrenHandler={checkChildrenHandler}
          />
        ) : (
          <div className="no-data">
            <span>장바구니에 담겨있는 상품이 없습니다.</span>
          </div>
        )}
        <PriceBox items={items} deliveryCharge={deliveryCharge} />
        {items.length > 0 ? (
          <div className="buttons-box">
            <div className="delete-button">
              <button onClick={deleteItems}>삭제 하기</button>
            </div>
            <div className="purchase-buttons">
              <a className="keep-shopping">쇼핑 계속하기</a>
              <button className="make-order" onClick={makeOrder}>
                주문하기
              </button>
              <a className="npay" href="">
                npay
              </a>
            </div>
          </div>
        ) : null}
        <CustomerInfo deliveryCharge={deliveryCharge} items={items} />
      </div>
    );
  }
}

export default CartSection;

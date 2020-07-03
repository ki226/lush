import React, { Component } from "react";
import CartSection from "Components/CartSection";

import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const {
      location: { search },
    } = this.props;
    this.state = {
      isMember: false,
      items: [],
      status: new URLSearchParams(search).get("status"),
      orderItems: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.loadData();
    }
  }

  loadData = () => {
    let items = sessionStorage.getItem("items");
    items = items ? JSON.parse(items) : [];
    this.setState({ isMember: true, items });
  };

  counterHandler = (product_number, sign) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.product_number !== product_number) {
        return item;
      } else {
        return sign === "+"
          ? { ...item, count: item.count + 1 }
          : item.count === 1
          ? { ...item, count: 1 }
          : { ...item, count: item.count - 1 };
      }
    });
    this.setState({ items: newItems });
  };

  checkboxHandler = (product_number) => {
    const { items } = this.state;
    const newItems = items.map((item) =>
      item.product_number !== product_number
        ? item
        : { ...item, selected: !item.selected }
    );
    this.setState({ items: newItems });
  };

  checkChildrenHandler = (event) => {
    const { items } = this.state;
    const checked = event.target.checked;
    const newItems = items.map((item) => ({ ...item, selected: checked }));
    this.setState({ items: newItems });
  };

  deleteItems = () => {
    const { items } = this.state;
    const numberOfItems = items
      .map((item) => item.selected)
      .reduce((acc, curr) => acc + curr);
    const result = window.confirm(
      numberOfItems !== 0
        ? `선택하신 ${Number(
            numberOfItems
          )}개상품을 장바구니에서 삭제 하시겠습니다.`
        : "선택하신 상품이 없습니다."
    );
    if (result) {
      const newItems = items.filter((item) => item.selected !== true);
      this.setState({ items: newItems });
      sessionStorage.setItem(
        "items",
        JSON.stringify(newItems.map((item) => ({ ...item, selected: true })))
      );
    }
  };

  makeOrder = () => {
    const { items } = this.state;
    const numberOfItems = items
      .map((item) => item.selected)
      .reduce((acc, curr) => acc + curr);
    const result = window.confirm(
      numberOfItems !== 0
        ? `선택하신 ${Number(numberOfItems)}개상품만 주문합니다.`
        : "선택하신 상품이 없습니다."
    );

    if (result) {
      this.props.history.push("/shoppingcart?status=order");
      const orderItems = items.map((item) => item.selected);
      this.setState({ status: "order", orderItems });
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { isMember, items, status, orderItems } = this.state;
    console.log(this.state);
    return (
      <div className={`ShoppingCart ${status}`}>
        <div className="header">
          <h2 className="heading">SHOPPING CART</h2>
          <div className="shopping-status">
            <span className={status === "cart" ? "on" : ""}>Cart</span>
            <span className={status === "order" ? "on" : ""}>Order</span>
            <span className={status === "orderConfirmed" ? "on" : ""}>
              Order confirmed
            </span>
          </div>
        </div>
        <CartSection
          isMember={isMember}
          items={items}
          counterHandler={this.counterHandler}
          checkboxHandler={this.checkboxHandler}
          checkChildrenHandler={this.checkChildrenHandler}
          deleteItems={this.deleteItems}
          makeOrder={this.makeOrder}
          orderItems={orderItems}
        />
      </div>
    );
  }
}

export default ShoppingCart;

import React, { Component } from "react";
import CartSection from "Components/CartSection";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  state = { isMember: false, items: [], loading: true };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "cartData.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ isMember: data.isMember, items: data.items })
      )
      .catch((error) => console.log("Error occurred", error))
      .finally(() => this.setState({ loading: false }));
  }

  counterHandler = (goods_no, sign) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.goods_no !== goods_no) {
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

  checkboxHandler = (goods_no) => {
    const { items } = this.state;
    const newItems = items.map((item) =>
      item.goods_no !== goods_no ? item : { ...item, selected: !item.selected }
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
        ? `선택하신 ${numberOfItems}개상품을 장바구니에서 삭제 하시겠습니다.`
        : "선택하신 상품이 없습니다."
    );
    if (result) {
      const newItems = items.filter((item) => item.selected !== true);
      this.setState({ items: newItems });
    }
  };

  makeOrder = () => {
    const { items } = this.state;
    const numberOfItems = items
      .map((item) => item.selected)
      .reduce((acc, curr) => acc + curr);
    const result = window.confirm(
      numberOfItems !== 0
        ? `선택하신 ${numberOfItems}개상품만 주문합니다.`
        : "선택하신 상품이 없습니다."
    );
    // 추후 버튼 클릭 이후 동작 작성 필요
  };

  render() {
    const { loading, isMember, items } = this.state;
    return loading ? null : (
      <div className="ShoppingCart">
        <div className="header">
          <h2 className="heading">SHOPPING CART</h2>
          <div className="shopping-status">
            <span className="on">Cart</span>
            <span>Order</span>
            <span>Order confirmed</span>
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
        />
      </div>
    );
  }
}

export default ShoppingCart;

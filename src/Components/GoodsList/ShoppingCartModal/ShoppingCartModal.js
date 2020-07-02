import React, { Component } from "react";
import "./ShoppingCartModal.scss";

class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  countHandler = (num) => {
    const { count } = this.state;
    this.setState({ count: count + num === 0 ? 1 : count + num });
  };

  addToCart = () => {
    const {
      product: {
        product_number,
        product_name,
        sub_ctgry_code,
        sub_ctgry_name,
        image,
        price,
      },
    } = this.props;

    const goods = {
      product_number: product_number,
      product_name: product_name,
      sub_ctgry_code: sub_ctgry_code,
      sub_ctgry_name: sub_ctgry_name,
      image: image,
      price: price,
      count: this.state.count,
      selected: true,
    };

    let items = sessionStorage.getItem("items");
    items = items ? JSON.parse(items) : [];

    const exists =
      items.filter((item) => item.product_number === product_number).length ===
      1
        ? true
        : false;

    if (exists) {
      items = items.map((item) => {
        if (item.product_number !== goods.product_number) return item;
        return { ...item, count: item.count + goods.count };
      });
    } else {
      items.push(goods);
    }

    sessionStorage.setItem("items", JSON.stringify(items));
    this.props.toggleCartModal();
    this.props.toggleConfirmModal();
  };

  render() {
    const { count } = this.state;
    const {
      product: { product_number, product_name, price, image, hash_tag },
      isCartModalOn,
      toggleCartModal,
    } = this.props;

    return (
      <div className={`ShoppingCartModal ${isCartModalOn ? "on" : ""}`}>
        <div className="modal-container">
          <div className="header">
            <h2 className="heading">장바구니 담기</h2>
            <button className="button-close" onClick={toggleCartModal}></button>
          </div>
          <div className="content">
            <div className="image">
              <img src={image} alt={product_number} />
            </div>
            <div className="info">
              <div className="text">
                <p className="name">{product_name}</p>
                <p className="tags">{hash_tag}</p>
              </div>
              <div className="sales">
                <div className="button-count">
                  <button
                    className="countDown"
                    onClick={() => this.countHandler(-1)}
                  >
                    감소
                  </button>
                  <input
                    className="count"
                    type="text"
                    maxLength="5"
                    value={this.state.count.toLocaleString()}
                    readOnly={true}
                  />
                  <button
                    className="countUp"
                    onClick={() => this.countHandler(1)}
                  >
                    증가
                  </button>
                </div>
                <p className="price">{`￦${(
                  price * count
                ).toLocaleString()}`}</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="button-cancel" onClick={toggleCartModal}>
              취소하기
            </button>
            <button className="button-add" onClick={this.addToCart}>
              담기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartModal;

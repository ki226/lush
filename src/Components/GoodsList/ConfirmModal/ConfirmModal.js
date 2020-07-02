import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ConfirmModal.scss";

class ConfirmModal extends Component {
  render() {
    const { isConfirmModalOn, toggleConfirmModal } = this.props;
    return (
      <div className={`ConfirmModal ${isConfirmModalOn ? "on" : ""}`}>
        <div className="modal-container">
          <div className="header">
            <button
              className="button-close"
              onClick={toggleConfirmModal}
            ></button>
          </div>
          <div className="text">
            <p className="heading">상품이 장바구니에 담겼습니다.</p>
            <p className="small-heading">바로 확인하시겠습니까?</p>
          </div>
          <div className="footer">
            <button className="button-cancel" onClick={toggleConfirmModal}>
              계속 쇼핑하기
            </button>
            <Link to="/shoppingcart">
              <button className="button-add">확인하기</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmModal;

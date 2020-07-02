import React, { Component } from "react";
import "./AddAddress.scss";

class AddAddress extends Component {
  render() {
    const { menuShow, menuHide } = this.props;
    return (
      <div
        className={`AddAddress ${
          menuShow === 0 ? "AddAdress" : "AddAddress-hide"
        }`}
      >
        <div className="add-address-container">
          <h2>나의 배송지 관리</h2>
          <div className="add-form">
            <p className="form-title">배송지 등록</p>
            <div className="input-form">
              <div className="address-name-input">
                <div className="input-address-name">
                  <p>*배송지 이름</p>
                </div>
                <div className="name-input">
                  <input type="text"></input>
                </div>
              </div>
              <div className="recieve-user-name-input">
                <div className="input-recieve-user-name">
                  <p>*받으실 분</p>
                </div>
                <div className="user-input">
                  <input type="text"></input>
                </div>
              </div>
              <div className="address-input">
                <div className="input-address-title">
                  <p>*받으실 곳</p>
                </div>
                <div className="address-input-form">
                  <div className="address-input1">
                    <input type="text"></input>
                    <button>우편번호 검색</button>
                  </div>
                  <div className="address-input2">
                    <input type="text"></input>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
              <div className="user-number-input">
                <div className="input-number">
                  <p>전화번호</p>
                </div>
                <div className="number-input">
                  <input type="text"></input>
                </div>
              </div>
              <div className="user-mobile-input">
                <div className="input-mobile">
                  <p>*휴대폰번호</p>
                </div>
                <div className="mobile-input">
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div className="default-address-check">
              <div className="address-check-input">
                <input type="checkbox"></input>
              </div>
              <div className="address-check-text">
                <span>기본 배송지로 설정 합니다.</span>
              </div>
            </div>
            <div className="last-btn">
              <div className="cancel-btn">
                <button onClick={menuHide}>취소</button>
              </div>
              <div className="save-btn">
                <button onClick={menuHide}>저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAddress;

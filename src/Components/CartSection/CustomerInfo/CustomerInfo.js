import React, { Component } from "react";
import "./CustomerInfo.scss";

class CustomerInfo extends Component {
  inputHandler = () => {};

  render() {
    const { items, deliveryCharge } = this.props;

    const totalPrice =
      items.length > 0 &&
      items.filter((item) => item.selected === true).length > 0
        ? items
            .filter((item) => item.selected === true)
            .map((item) => item.count * item.price)
            .reduce((acc, curr) => acc + curr)
        : 0;

    return (
      <div className="CustomerInfo">
        <div className="order-info section">
          <div className="heading">
            <h2 className="title">주문 고객 정보</h2>
          </div>
          <div className="form">
            <div className="row orderer-name">
              <span>주문하시는 분</span>
              <input className="text-input" type="text" name="orderer-name" />
            </div>
            <div className="row orderer-cell">
              <span>휴대폰 번호</span>
              <input className="text-input" type="text" name="orderer-cell" />
            </div>
            <div className="row orderer-email">
              <span>이메일</span>
              <input className="text-input" type="text" name="orderer-email" />
            </div>
          </div>
        </div>
        <div className="delivery-info section">
          <div className="heading">
            <h2 className="title">배송 정보</h2>
          </div>
          <div className="form">
            <div className="row receiver-confirm">
              <span>배송지 확인</span>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="receiver"
                  value="기본 배송지"
                />
                <label>기본 배송지</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="receiver"
                  value="최근 배송지"
                />
                <label>최근 배송지</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="receiver"
                  value="기본 배송지"
                />
                <label>직접입력</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="receiver"
                  value="기본 배송지"
                />
                <label>주문자정보와 동일</label>
              </div>
            </div>
            <div className="row receiver-name">
              <span>받으실분</span>
              <input className="text-input" type="text" />
            </div>
            <div className="row receiver-address">
              <span>받으실 곳</span>
              <input className="text-input" type="text" />
            </div>
            <div className="row receiver-phone">
              <span>전화번호</span>
              <input className="text-input" type="text" />
            </div>
            <div className="row receiver-cell">
              <span>휴대폰 번호</span>
              <input className="text-input" type="text" />
            </div>
            <div className="row receiver-message">
              <span>배송 메시지</span>
              <input className="text-input" type="text" />
            </div>
          </div>
        </div>
        <div className="payment-info section">
          <div className="heading">
            <h2 className="title">결제 정보</h2>
          </div>
          <div className="form">
            <div className="row payment-amount">
              <span>합계 금액</span>
              <p>￦{totalPrice.toLocaleString()}</p>
            </div>
            <div className="row payment-charge">
              <span>배송비</span>
              <p>￦{deliveryCharge.toLocaleString()}</p>
            </div>
            <div className="row payment-total">
              <span>최종 결제 금액</span>
              <p>￦{(totalPrice + deliveryCharge).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="payment-method section">
          <div className="heading">
            <h2 className="title">결제 방법</h2>
          </div>
          <div
            className="form"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          >
            <div className="row payment-type">
              <span>일반결제</span>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="payment-type"
                  value="신용카드"
                />
                <label>신용카드</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="payment-type"
                  value="계좌이체"
                />
                <label>계좌이체</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="payment-type"
                  value="가상계좌"
                />
                <label>가상계좌</label>
              </div>
              <div>
                <input
                  className="radio-input"
                  type="radio"
                  name="payment-type"
                  value="휴대폰결제"
                />
                <label>휴대폰결제</label>
              </div>
            </div>
          </div>
          <div className="price-box">
            <p>
              최종 결제 금액
              <span>￦{(totalPrice + deliveryCharge).toLocaleString()}</span>
            </p>
          </div>
          <div className="payment-box">
            <div className="purchase-buttons">
              <a className="backToCart">장바구니 가기</a>
              <button className="make-purchase">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;

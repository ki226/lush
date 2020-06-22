import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="Header">
        <ul>
          <li>
            <Link to="/">메인화면</Link>
          </li>
          <li>
            <Link to="/product">제품페이지</Link>
          </li>
          <li>
            <Link to="/brand">브랜드</Link>
          </li>
          <li>
            <Link to="/storeInfo">매장정보</Link>
          </li>
          <li>
            <Link to="/spa">스파</Link>
          </li>
          <li>
            <Link to="/event">이벤트</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>

          <li>
            <Link to="/shoppingcart">장바구니</Link>
          </li>

          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

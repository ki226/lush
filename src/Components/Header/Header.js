import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "Components/ProductDetail";
import BrandDetail from "Components/BrandDetail";
import mainLogo from "Images/logo.png";
import topSearchIcon from "./Images/top_search_icon.png";
import topCartIcon from "./Images/top_cart_icon.png";
import topMyPageIcon from "./Images/top_mypage_icon.png";
import "./Header.scss";

class Header extends Component {
  state = {
    activeTab: null,
  };

  menuDown = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  menuUp = () => {
    this.setState({
      activeTab: null,
    });
  };

  render() {
    return (
      <>
        <div className="Header">
          <div className="header-menu">
            <div>
              <Link to="/">
                <img className="main-logo" src={mainLogo} alt="lush" />
              </Link>
            </div>
            <div className="main-menus">
              <ul className="main-menu-list">
                <li
                  className="product-menu"
                  onMouseOver={() => this.menuDown(0)}
                  onMouseLeave={this.menuUp}
                >
                  <Link className="main-menu" to="/product">
                    제품
                  </Link>
                  <ProductDetail menuDown={this.state.activeTab} />
                </li>
                <li
                  className="brand-menu"
                  onMouseOver={() => this.menuDown(1)}
                  onMouseLeave={this.menuUp}
                >
                  <Link className="main-menu" to="/brand">
                    브랜드
                  </Link>
                  <BrandDetail menuDown={this.state.activeTab} />
                </li>
                <li className="store-menu">
                  <Link className="main-menu" to="/storeInfo">
                    매장 안내
                  </Link>
                </li>
                <li className="spa-menu">
                  <Link className="main-menu" to="/spa">
                    스파
                  </Link>
                </li>
                <li className="event-menu">
                  <Link className="main-menu" to="/event">
                    이벤트
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="main-icons">
              <li className="main-icon-list header-search">
                <img className="main-icon" src={topSearchIcon} alt="search" />
              </li>
              <Link to="/shoppingCart">
                <li className="main-icon-list header-cart">
                  <img className="main-icon" src={topCartIcon} alt="cart" />
                  <div className="cart-count">
                    <span className="cart-count-number">0</span>
                  </div>
                </li>
              </Link>
              <li
                className="main-icon-list header-pop"
                onMouseOver={() => this.menuDown(2)}
                onMouseLeave={this.menuUp}
              >
                <Link to="/mypage">
                  <img
                    className="main-icon mypage-icon"
                    src={topMyPageIcon}
                    alt="mypage"
                  />
                </Link>
                <div
                  className={`pop-form ${
                    this.state.activeTab === 2 ? "pop-form-show" : "pop-hide"
                  }`}
                >
                  <ul className="pop-mypage">
                    <li className="pop-menu login">
                      <Link to="/login">로그인</Link>
                    </li>
                    <li className="pop-menu sign-up">
                      <Link to="/signup">회원가입</Link>
                    </li>
                    <li className="pop-menu scout">스카우트</li>
                    <li className="pop-menu customer">고객센터</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Header;

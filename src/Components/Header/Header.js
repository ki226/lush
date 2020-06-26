import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import mainLogo from "Images/logo.png";
import topSearchIcon from "./Images/top_search_icon.png";
import topCartIcon from "./Images/top_cart_icon.png";
import topMyPageIcon from "./Images/top_mypage_icon.png";
import ProductDetail from "Components/ProductDetail";
import BrandDetail from "Components/BrandDetail";

class Header extends Component {
  state = {
    productDropDownMenu: "",
    brandDropDownMenu: "",
    popDropDownMenu: "",
  };

  ProductMenuDropDown = () => {
    this.setState({
      productDropDownMenu: true,
    });
  };
  ProductMenuUp = () => {
    this.setState({
      productDropDownMenu: "",
    });
  };

  BrandMenuDropDown = () => {
    this.setState({
      brandDropDownMenu: true,
    });
  };
  BrandMenuUp = () => {
    this.setState({
      brandDropDownMenu: "",
    });
  };

  popMenuDropDown = () => {
    this.setState({
      popDropDownMenu: true,
    });
  };
  popMenuUp = () => {
    this.setState({
      popDropDownMenu: "",
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
                  onMouseOver={this.ProductMenuDropDown}
                  onMouseLeave={this.ProductMenuUp}
                >
                  <Link className="main-menu" to="/product">
                    제품
                  </Link>
                  <ProductDetail
                    // menuUp={this.ProductMenuUp}
                    productMenuDown={this.state.productDropDownMenu}
                  />
                </li>
                <li
                  className="brand-menu"
                  onMouseOver={this.BrandMenuDropDown}
                  onMouseLeave={this.BrandMenuUp}
                >
                  <Link className="main-menu" to="/brand">
                    브랜드
                  </Link>
                  <BrandDetail
                    // menuUP={this.BrandmenuUp}
                    brandMenuDown={this.state.brandDropDownMenu}
                  />
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
              <li className="main-icon-list">
                <img className="main-icon" src={topSearchIcon} alt="search" />
              </li>
              <li className="main-icon-list">
                <img className="main-icon" src={topCartIcon} alt="cart" />
              </li>
              <li
                className="main-icon-list header-pop"
                onMouseOver={this.popMenuDropDown}
                onMouseLeave={this.popMenuUp}
              >
                <img className="main-icon" src={topMyPageIcon} alt="mypage" />
                <div
                  className={`pop-form ${
                    this.state.popDropDownMenu ? "pop-from-show" : "pop-hide"
                  }`}
                >
                  <ul className="pop-mypage">
                    <li className="pop-menu login">로그인</li>
                    <li className="pop-menu sign-up">회원가입</li>
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

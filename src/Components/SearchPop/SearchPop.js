import React, { Component } from "react";
import "./SearchPop.scss";

class SearchPop extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className={`SearchPop ${
          this.props.menuOpen === 3 ? "menu-show" : "menu-hide"
        }`}
      >
        <button className="close-btn" onClick={this.props.menuHide}></button>
        <div className="search-container">
          <div className="top-search-form">
            <input
              type="text"
              className="top-search-input"
              placeholder="러쉬 전문가 추천템?"
            ></input>
            <button className="search-btn"></button>
          </div>
          <div className="search-text-select">
            <div className="pop-search">
              <p>인기 검색어</p>
            </div>
            <ul className="pop-search-list">
              <li className="search-product">#더티</li>
              <li className="search-product">#고체 샴푸</li>
              <li className="search-product">#마크스</li>
              <li className="search-product">#비누</li>
              <li className="search-product">#보디 스프레이</li>
              <li className="search-product">#입욕제</li>
            </ul>

            <div className="recent-search">
              <p>최근</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPop;

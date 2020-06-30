import React, { Component } from "react";
import "./BrandDetail.scss";

class BrandDetail extends Component {
  state = {};

  render() {
    return (
      <div
        className={`BrandDetail ${this.props.menuDown === 1 ? "show" : "hide"}`}
        // onMouseLeave={this.props.BrandmenuUp}
        //   style={{ display: this.props.brandDisplay }}
      >
        <div className="Brand-detail-layout">
          <ul className="Brand-list">
            <li className="Brand-title">러쉬</li>
            <li className="brand-cate">ABOUTLUSH</li>
          </ul>
          <ul className="Brand-list">
            <li className="Brand-title">채러티 팟</li>
          </ul>
          <ul className="Brand-list">
            <li className="Brand-title">캠페인</li>
          </ul>
          <ul className="Brand-list">
            <li className="Brand-title">원재료</li>
          </ul>
          <ul className="Brand-list">
            <li className="Brand-title">아티클</li>
          </ul>
          <ul className="Brand-list">
            <li className="Brand-title">젤러쉬</li>
            <li className="brand-cate">젤러쉬 후기</li>
            <li className="brand-cate">젤러쉬 활동</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BrandDetail;

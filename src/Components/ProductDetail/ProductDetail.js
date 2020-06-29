import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div
        className={`ProductDetail ${
          this.props.menuDown === 0 ? "product-show" : "hide"
        }`}
      >
        <div className="product-detail-layout">
          <ul className="product-list">
            <li className="product-title">베스트</li>
            <li className="product-cate">주간베스트</li>
            <li className="product-cate">별다섯개 후기</li>
            <li className="product-cate">온라인 전용</li>
            <li className="product-cate">국내제조</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">신제품</li>
            <li className="product-cate">보디스프레이</li>
            <li className="product-cate">버블 바 큐레이션</li>
            <li className="product-cate">스프링 컬렉션</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">배쓰</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">샤워</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">보디</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">페이스</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">헤어</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">메이크업</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">퍼퓸</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">기프트</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

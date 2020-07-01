import React, { Component } from "react";
import "./MiddleSlide.scss";

class MiddleSlide extends Component {
  state = {};
  render() {
    const { slideData } = this.props;
    return (
      <div className="MiddleSlide">
        <div className="product-form">
          <img
            className="product-img"
            src={slideData.productImg}
            alt={slideData.productName}
          />
          <div className="slide-info">
            <p className="product-name">{slideData.productName}</p>
            <p className="hash-tag">{slideData.hashTag}</p>
            <p className="price">{slideData.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleSlide;

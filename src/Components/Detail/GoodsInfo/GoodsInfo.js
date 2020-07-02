import React, { Component } from "react";
import "./GoodsInfo.scss";

class GoodsInfo extends Component {
  render() {
    const {
      lushvideo,
      todayshipped_img,
      product_category,
      product_title_kor,
      product_title_en,
    } = this.props;

    return (
      <div className="container">
        <div className="navibar">
          <div className="navibartap">
            <a href="detail" className="onA">
              <span className="ona">상품상세정보</span>
            </a>
            <a href="reviews" className="onB">
              <span className="onb">상품후기</span>
            </a>
            <a href="delivery" className="onC">
              <span className="onc">배송/교환 및 반품안내</span>
            </a>
          </div>
        </div>

        <div className="productdetailinfo">
          <div className="video">
            <embed className="lushvideo" src={lushvideo} alt="러쉬동영상" />
          </div>
          <div className="todayshipped">
            <img
              src={todayshipped_img}
              className="todayshipped_img"
              alt="오늘배송"
            />
          </div>
          <div className="product_inner_name">
            <p className="product_category">{product_category}</p>
            <div className="product_title">
              <p className="product_title_kor">{product_title_kor}</p>
              <p className="product_title_en">{product_title_en}</p>
            </div>
          </div>
          /
        </div>
      </div>
    );
  }
}

export default GoodsInfo;

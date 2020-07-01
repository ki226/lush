import React, { Component } from "react";
import "./GoodsInfo.scss";

class GoodsInfo extends Component {
  state = {};
  render() {
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
            <embed
              className="lushvideo"
              src="https://www.youtube.com/embed/XKYqwOA3hio"
              alt="러쉬동영상"
            />
          </div>

          <div className="todayshipped">
            <img
              src="http://img.lush.co.kr/pns/noti/200521_bn_product_1180.jpg"
              className="todayshipped_img"
              alt="오늘배송"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsInfo;

import React, { Component } from "react";
import "./GoodsInfo.scss";
import "../../../../public/data";

class GoodsInfo extends Component {
  render() {
    const {
      video,
      // todayshipped_img,
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
            <embed className="video" src={video} alt="러쉬동영상" />
          </div>
          {/* <div className="todayshipped">
            <img
              src={todayshipped_img}
              className="todayshipped_img"
              alt="오늘배송"
            />
          </div> */}
          <div className="product_inner_name">
            <p className="product_category">{product_category}</p>
            <div className="product_title">
              <p className="product_title_kor">{product_title_kor}</p>
              <p className="product_title_en">{product_title_en}</p>
            </div>
          </div>
        </div>
        <div className="related_product">
          <div className="related_product_title">
            <p className="title_bold">함께하면 더 좋은 제품</p>
            <p className="title_normal">함께 사용하면 좋습니다.</p>
          </div>
          <div className="related_product_picture">
            <img className="related_prodcut_picture_a" />
            <img className="related_prodcut_picture_a" />
            <img className="related_prodcut_picture_a" />
            <img className="related_prodcut_picture_a" />
          </div>
        </div>
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
        <div className="customer_review_box">
          <div className="customer_review_textbox">
            <span className="customer_review_title">Product Reviews</span>
            <span className="customer_review_title_b">
              나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!
            </span>
          </div>
          <div className="border_box"></div>
        </div>
      </div>
    );
  }
}

export default GoodsInfo;

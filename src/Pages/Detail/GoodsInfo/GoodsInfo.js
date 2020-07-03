import React, { Component } from "react";
import "./GoodsInfo.scss";

class GoodsInfo extends Component {
  render() {
    const {
      video,
      html,

      // todayshipped_img,
      // product_category,
      // product_title_kor,
      // product_title_en,
    } = this.props;

    return (
      <div id="wrap">
        {" "}
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
            <article>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
                className="html_css"
              ></div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsInfo;

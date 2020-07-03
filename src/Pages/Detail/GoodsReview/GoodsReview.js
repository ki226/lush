import React, { Component } from "react";
import "./GoodsReview.scss";

class GoodsReview extends Component {
  state = {};
  render() {
    return (
      <div className="GoodsReview">
        <div className="plusreview">
          <span className="title">Plus Review</span>
        </div>
        <div className="reviewcontainer">
          {/* {" "} */}
          <div className="plusreviewphoto">
            <div className="plusreviewphototext">
              <span className="text">포토리뷰 모아보기</span>
            </div>
            <div className="plusreview_img">
              <div className="imgboxa"></div>
              <div className="imgboxa"></div>
              <div className="imgboxa"></div>
              <div className="imgboxa"></div>
              <div className="imgboxa"></div>
            </div>
          </div>
          <div className="starscores">
            <div className="scores">
              <div className="aligntext">
                <div className="text">평가</div>
                <div className="number">4.2</div>
                <div className="stars">★★★★</div>
              </div>
            </div>
            <div className="thenumberofreview">
              <div className="scoresb">
                <div className="aligntextb">
                  <div className="registerreview">
                    <div className="registerreviewtext">리뷰등록</div>
                    <div className="registerrevviewnum">10건</div>
                  </div>
                  <div className="photoreview">
                    <div className="photoreviewtext">포토리뷰</div>
                    <div className="photoreviewnum">20건</div>
                  </div>
                  <div className="productcheck">
                    <div className="productchecktext">상품조회수</div>
                    <div className="productchecknum">40건</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsReview;

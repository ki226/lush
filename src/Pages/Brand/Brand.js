import React, { Component } from "react";
import brandImage from "./Images/brand_lush_img.jpg";
import "./Brand.scss";

class Brand extends Component {
  state = {};
  render() {
    return (
      <div className="Brand">
        <div className="brand-main-container">
          <div className="brand-introduce">
            <img className="lush-img" src={brandImage} alt="lush" />
            <span className="title">우리는 믿습니다...</span>
          </div>
          <div className="brand-text">
            <div className="left">
              <p className="left-top left-text">
                <b>신선한 과일과 채소, 최상의 에센셜 오일,</b>
                <br /> 그리고 <b> 안전한 원료</b>를 사용하여 효과적인 제품을
                <br />
                만들 수 있다는 것을 믿습니다.
              </p>
              <p className="left-second left-text">
                우리는 <b>최소한의 포장과 보존제를 사용하여</b>
                <br />
                <b>직접 손으로 제품을 만들고,</b>
                <br />
                베지테리언 원료만을 사용하며,
                <br />
                제품이 만들어진 시기를 표시하여
                <br />
                고객에게 알리는 것이 옳다고 믿습니다.
              </p>
              <p className="left-third left-text">
                우리는 은은한 촛불 아래서 즐기는 입욕 시간,
                <br />
                사랑하는 사람과 함께하는 샤워와 마사지
                <br />
                그리고 세상을 아름다운 향기로
                <br />
                가득 채울 수 있다는 것을 믿으며
                <br />
                더불어 <b>실수를 하거나, 모든 것을 잃고서도</b>
                <br />
                <b>다시 시작할 수 있음</b>을 믿습니다.
              </p>
            </div>
            <div className="right">
              <p className="right-top right-text">
                우리는 <b>동물실험을 하지 않는 회사와 거래</b>
                <br />
                인체에 직접 테스트함으로써
                <br />
                안전한 제품을 만들 수 있다고 믿습니다.
              </p>
              <p className="right-second right-text">
                <b>우리는 행복한 사람이</b>
                <br />
                <b>행복한 제품을 만들 수 있다</b>고 믿으며,
                <br />
                제조자의 얼굴 스티커를 제품 라벨에 붙힘으로써
                <br />
                자부심을 가질 수 있다고 믿습니다.
              </p>
              <p className="right-third right-text">
                우리 제품이 가진 <b>올바른 가치를 제공</b>하고,
                <br />
                그로 인해 수익이 창출된다는 것을 믿으며,
                <br />
                <b>고객이 항상 옳다는 사실</b>을 믿습니다.
              </p>
              <p className="right-fourth right-text">
                우리는 모든 사람이 <br />
                <b>전 세계 어디든 자유롭게 이동하며,</b>
                <br />
                <b>새로운 삶의 터전을 마련</b>할 수 있다고 믿습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;

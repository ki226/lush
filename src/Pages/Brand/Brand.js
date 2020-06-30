import React, { Component } from "react";
import HeroBanner from "Components/HeroBanner";
import "./Brand.scss";

class Brand extends Component {
  state = {};
  render() {
    return (
      <div className="Brand">
        <HeroBanner
          banner={"lushBanner"}
          bannerSubheading={"ABOUT LUSH"}
          bannerTitle={"영국 프레쉬 핸드메이드 코스메틱 러쉬"}
          bannerText1={
            "러쉬는 자연으로부터 얻은 신선한 재료와 동물실험을 하지 않은 정직한 재료를 사용하여 모든 제품을 손으로 직접 만듭니다."
          }
          bannerText2={
            "더불어 공정하게 얻은 원재료, 인권 보호, 포장 최소화 등 다양한 캠페인 활동을 통해 기업 윤리와 신념을 알리고 있습니다."
          }
        ></HeroBanner>
      </div>
    );
  }
}

export default Brand;

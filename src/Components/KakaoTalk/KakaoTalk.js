import React, { Component } from "react";
import "./KakaoTalk.scss";

class KakaoTalk extends Component {
  state = {};
  render() {
    return (
      <div className="KakaoTalk">
        <img
          src="https://www.lush.co.kr/data/skin/front/howling/img/banner/b1b6e64e85b6f09484b8ad3093775172_80626.png"
          onClick="location.href='https://open.kakao.com/o/sd5dLjjc';"
          alt="카카오톡"
          className="KakaoTalk_img"
        />
      </div>
    );
  }
}

export default KakaoTalk;

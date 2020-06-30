import React, { Component } from "react";
import "./Spa.scss";

class Spa extends Component {
  state = {};
  render() {
    return (
      <div className="Spa">
        <div className="spa-head">
          <div className="about-spa">
            <div className="about">ABOUT</div>
            <div className="voucher-guide">
              스파 바우처 <br /> 이용방법
            </div>
            <div className="about-voucher">
              스파 바우처에
              <br /> 대해 알아보세요!
            </div>
            <div className="more-info">자세히 보기></div>
          </div>
          <div className="spa-store1"></div>
          <div className="spa-store2"></div>
        </div>
      </div>
    );
  }
}

export default Spa;

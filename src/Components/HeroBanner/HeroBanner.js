import React, { Component } from "react";
import "./HeroBanner.scss";

class HeroBanner extends Component {
  render() {
    const {
      banner,
      bannerTitle,
      bannerText1,
      bannerText2,
      bannerSubheading,
    } = this.props;
    return (
      <div className="HeroBanner">
        <div className="image-container">
          <div className={banner}>
            <div
              className="banner-subheading text"
              style={{
                display:
                  banner !== "lushBanner" && banner !== "spaBanner"
                    ? "none"
                    : "",
              }}
            >
              {bannerSubheading}
            </div>
            <div className="banner-title text">{bannerTitle}</div>
            <div className="banner-text1 text">{bannerText1}</div>
            <div className="banner-text2 text">{bannerText2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;

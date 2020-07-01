import React, { Component } from "react";
// import Switch from "react-router-dom";
import article from "./Images/brand_article_banner.jpg";
import campaign from "./Images/brand_campaign_banner.jpg";
import charityPot from "./Images/brand_charity_pot_banner.jpg";
import ingredient from "./Images/brand_ingredient_banner.jpg";
import jealushAfter from "./Images/brand_jealush_after_banner.jpg";
import jealushActive from "./Images/brand_jealush_active_banner.jpg";
import lush from "./Images/brand_lush_banner.jpg";
import spa from "./Images/Spa_banner.jpg";
import bathBomb from "./Images/product_bathbomb_banner.jpg";
import bath from "./Images/product_bath_banner.jpg";
import "./HeroBanner.scss";

class HeroBanner extends Component {
  state = {};

  render() {
    return (
      <div className="HeroBanner">
        <div className="image-container">
          <div className={this.props.banner}>
            <div
              className="banner-subheading text"
              style={{
                display:
                  this.props.banner !== "lushBanner" &&
                  this.props.banner !== "spaBanner"
                    ? "none"
                    : "",
              }}
            >
              {this.props.bannerSubheading}
            </div>
            <div className="banner-title text">{this.props.bannerTitle}</div>
            <div className="banner-text1 text">{this.props.bannerText1}</div>
            <div className="banner-text2 text">{this.props.bannerText2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;

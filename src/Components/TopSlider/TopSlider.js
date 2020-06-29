import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSlider.scss";

class TopSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 700,
      fade: true,
      cssEase: "linear",
      appendDots: (dots) => (
        <div
          style={{
            display: "flex",
          }}
        >
          <ul
            style={{
              marginLeft: "580px",
              width: "14px",
              position: "absolute",
              top: "200px",
              left: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            width: "14px",
            height: "14px",
            color: "white",
            border: "1.5px white solid",
            borderRadius: "7px",
          }}
        ></div>
      ),
    };
    return (
      <div className="TopSlider">
        <div className="slide-wrap">
          <div className="image-form">
            <Slider {...settings}>
              <div className="banner-images image1"></div>
              <div className="banner-images image2"></div>
              <div className="banner-images image3"></div>
              <div className="banner-images image4"></div>
              <div className="banner-images image5"></div>
              <div className="banner-images image6"></div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default TopSlider;

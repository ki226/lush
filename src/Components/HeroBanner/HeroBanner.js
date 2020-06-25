import React, { Component } from "react";
import "./HeroBanner.scss";
import bannerSlide01 from "./Images/banner_slide_01.jpg";
import bannerSlide02 from "./Images/banner_slide_02.jpg";
import bannerSlide03 from "./Images/banner_slide_03.jpg";
import bannerSlide04 from "./Images/banner_slide_04.jpg";
import bannerSlide05 from "./Images/banner_slide_05.jpg";
import bannerSlide06 from "./Images/banner_slide_06.jpg";
import bannerSlide07 from "./Images/banner_slide_07.jpg";

class HeroBanner extends Component {
  state = {
    color: "",
    slideImage: bannerSlide01,
    imageList: [
      bannerSlide01,
      bannerSlide02,
      bannerSlide03,
      bannerSlide04,
      bannerSlide05,
      bannerSlide06,
      bannerSlide07,
    ],
  };

  // slideShow = () => {
  //   for (let i = this.state.imageList.length; (i = 0); i--) {
  //     console.log("slidetest1");
  //     if (this.state.slideImage === this.state.imageList[i]) {
  //       console.log("slidetest");
  //       this.setState({
  //         slideImage: this.state.imageList[i + 1],
  //       });
  //     }
  //   }
  // };

  bannerImageHandler = (e) => {
    if (e.target.className == "slick-dot1") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide01,
      });
    }
    if (e.target.className == "slick-dot2") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide02,
      });
    }
    if (e.target.className == "slick-dot3") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide03,
      });
    }
    if (e.target.className == "slick-dot4") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide04,
      });
    }
    if (e.target.className == "slick-dot5") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide05,
      });
    }
    if (e.target.className == "slick-dot6") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide06,
      });
    }
    if (e.target.className == "slick-dot7") {
      e.target.style.backgroundColor = "white";
      this.setState({
        slideImage: bannerSlide07,
      });
    }
  };

  render() {
    return (
      <div className="HeroBanner">
        <div className="slide-wrap">
          <div className="image-form">
            <img
              className="banner-image"
              src={this.state.slideImage}
              alt="banner01"
            />
          </div>
          <ul className="slick-dots-form">
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot1"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot2"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot3"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot4"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot5"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                style={{ backgroundColor: this.state.color }}
                onClick={this.bannerImageHandler}
                className="slick-dot6"
              ></div>
            </li>
            <li className="slick-dots">
              <div
                onClick={this.bannerImageHandler}
                className="slick-dot7"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroBanner;

import React, { Component } from "react";
import "./Main.scss";
import HeroBanner from "Components/HeroBanner";
import MainUnderContents from "Components/MainUnderContents";
import overImage from "./Images/media_form_img.gif";
import underImageleft from "./Images/media_form_img2.jpg";
import underImageRight from "./Images/media_form_img3.jpg";
import slideImage from "./Images/slide_image.jpg";
import spaImage from "./Images/spa.gif";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <HeroBanner />
        <div className="middle-slide">
          <div className="middle-slide-form">
            <h1 className="middle-slide-title">나만 알고 싶은 향기</h1>
            <div className="all-slide-list">
              <div className="product-form">
                <img className="product-img" src={slideImage}></img>
                <div className="slide-info">
                  <p className="product-name">sample</p>
                  <p className="hash-tag">sample</p>
                  <p className="price">￦10,000</p>
                </div>
              </div>
              <div className="product-form">
                <img className="product-img" src={slideImage}></img>
                <div className="slide-info">
                  <p className="product-name">sample</p>
                  <p className="hash-tag">sample</p>
                  <p className="price">￦10,000</p>
                </div>
              </div>
              <div className="product-form">
                <img className="product-img" src={slideImage}></img>
                <div className="slide-info">
                  <p className="product-name">sample</p>
                  <p className="hash-tag">sample</p>
                  <p className="price">￦10,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slide-btn">
          <ul className="slick-dots-form">
            <li className="slick-dots">
              <div className="slick-dot1"></div>
            </li>
            <li className="slick-dots">
              <div className="slick-dot2"></div>
            </li>
            <li className="slick-dots">
              <div className="slick-dot3"></div>
            </li>
            <li className="slick-dots">
              <div className="slick-dot4"></div>
            </li>
          </ul>
        </div> */}
        <div className="media-form">
          <embed
            className="youtube"
            src="https://www.youtube.com/embed/rRzxEiBLQCA?rel=0&amp;controls=0&amp;showinfo=0"
          ></embed>
          <div className="media-form-img">
            <div className="media-form-img-over">
              <img className="over-img" src={overImage} />
            </div>
            <div className="media-form-img-under">
              <img className="left-under-img" src={underImageleft} />
              <img className="right-under-img" src={underImageRight} />
            </div>
          </div>
        </div>
        <div className="spa-ad">
          <div className="spa-ad-article">
            <div className="spa-ad-text">
              <h1 className="spa-ad-title">러쉬 스파</h1>
              <div className="spa-ad-string">
                <p>따뜻해진 날씨처럼, 온몸의 감각이 깨어날 시간이예요. </p>

                <p>러쉬 스파 트리트먼트로 경직된 근육을 보살펴보세요.</p>
              </div>
            </div>
            <div className="spa-ad-img">
              <img className="spa-gif" src={spaImage} />
            </div>
          </div>
        </div>
        <div className="main-under">
          <MainUnderContents />
        </div>
      </div>
    );
  }
}

export default Main;

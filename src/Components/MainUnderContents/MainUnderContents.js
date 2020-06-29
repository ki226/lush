import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainUnderContents.scss";
import fbIcon from "./Image/fb_icon.gif";
import instaIcon from "./Image/insta_icon.gif";
import youtubeIcon from "./Image/youtube_icon.gif";
import kakaoIcon from "./Image/kakao_icon.gif";

class MainUnderContents extends Component {
  state = {};
  render() {
    return (
      <div className="MainUnderContents">
        <div className="inner-wrap">
          <div className="instagram-wrap">
            <div className="insta-pics">
              <a
                href="https://www.instagram.com/p/CBz96xqHbh5/"
                target="_blank"
              >
                <div className="insta-box box1"></div>
              </a>
              <a
                href="https://www.instagram.com/p/CBxYdqnnlNM/"
                target="_blank"
              >
                <div className="insta-box box2"></div>
              </a>
              <a
                href="https://www.instagram.com/p/CBu0Q0QnWAb/"
                target="_blank"
              >
                <div className="insta-box box3"></div>
              </a>
              <a
                href="https://www.instagram.com/p/CBpe8cAnzvF/"
                target="_blank"
              >
                <div className="insta-box box4"></div>
              </a>
              <a
                href="https://www.instagram.com/p/CBuR1eXHCS-/"
                target="_blank"
              >
                <div className="insta-box box5"></div>
              </a>
              <a
                href="https://www.instagram.com/p/CBkiJe-ncye/"
                target="_blank"
              >
                <div className="insta-box box6"></div>
              </a>
            </div>
          </div>
          <div className="sns">
            <a href="http://www.facebook.com/lushkorea" target="_blank">
              <img className="underIcon" src={fbIcon} />
            </a>
            <a href="https://www.instagram.com/lushkorea/" target="_blank">
              <img className="underIcon" src={instaIcon} />
            </a>
            <a href="https://www.youtube.com/user/LUSHKOREA1" target="_blank">
              <img className="underIcon" src={youtubeIcon} />
            </a>
            <a href="https://pf.kakao.com/_VEbUM" target="_blank">
              <img className="underIcon" src={kakaoIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainUnderContents;

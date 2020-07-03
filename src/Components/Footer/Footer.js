import React, { Component } from "react";
import "./Footer.scss";
import mainLogo from "Images/logo.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="Footer">
        <div className="footer-container">
          <div className="footer-left">
            <img className="main-logo" src={mainLogo} />
            <div className="footer-left-under">
              <p>고객센터</p>
              <p className="phone-number">1644-2357</p>
              <p>webmaster@lush.co.kr</p>
              <p className="callCenter">상담전화 13:00~16:00(평일)</p>
              <p>상담톡 10:00~16:00(평일)</p>
            </div>
          </div>
          <div className="sub-info">
            <ul className="foot-menu">
              <li className="foot-scout">스카우트</li>
              <li className="foot-company">회사소개</li>
              <li className="foot-personal">개인정보처리방침</li>
              <li className="foot-media-info">영상정보관리치짐</li>
              <li className="foot-term">이용약관</li>
              <li className="foot-cumsomer">고객센터</li>
            </ul>
            <div className="foot-text">
              <p>가장 빠르게 LUSH 소식을 만나는 법!</p>
              <p>지금 뉴스레터를 구독하세요.</p>
              <p>언제든지 구독 해지하실 수 있습니다.</p>
            </div>
            <div className="foot-email-submit">
              <div className="foot-email-input">
                <input type="text" placeholder="이메일 주소를 입력해주세요." />
              </div>
              <div className="foot-email-btn">
                <button className="foot-btn">구독하기</button>
              </div>
            </div>
            <div className="foot-company-info">
              <p>
                서울특별시 서초구 서운로138(서초동아타워) 6층 | 사이트 운영자 :
                주식회사 러쉬코리아 | 대표이사 : 우미령
              </p>
              <p>
                사업자 등록번호: 201-81-77964 사업자정보확인 | 통신판매업
                신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 : 우승용
              </p>
              <p className="copyright">
                Copyright ⓒ LUSHKOREA co., Ltd.All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

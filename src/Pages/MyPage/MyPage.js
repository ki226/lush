import React, { Component } from "react";
import "./MyPage.scss";

class MyPage extends Component {
  state = {};
  render() {
    return (
      <div className="MyPage">
        <div className="mypage-container">
          <div className="mypage-menu">
            <h2>마이페이지</h2>
            <h3>쇼핑정보</h3>
            <ul>
              <li>주문목록/배송조회</li>
              <li>취소/반품/교환 내역</li>
              <li>환불/입금 내역</li>
              <li>찜리스트</li>
            </ul>
            <h3>내 덕찌</h3>
            <ul>
              <li>2020</li>
              <li>2019</li>
            </ul>
            <h3>스파</h3>
            <ul>
              <li>스파 주문 내역</li>
              <li>바우처 등록/예약</li>
              <li>스파 예약현황</li>
              <li>스파 이용안내</li>
            </ul>
            <h3>혜택관리</h3>
            <ul>
              <li>선물</li>
            </ul>
            <h3>고객센터</h3>
            <ul>
              <li>공지사항</li>
              <li>1:1문의</li>
              <li>FAQ</li>
            </ul>
            <h3>회원정보</h3>
            <ul>
              <li>회원정보 변경</li>
              <li>회원탈퇴</li>
              <li>배송지 관리</li>
            </ul>
            <p>나의 플러스 리뷰</p>
          </div>
          <div className="delivery-info">
            <div className="user-grade-info">
              <div className="user-grade">
                <div className="grade-img"></div>
                <div className="grade-text">
                  <p>이승민님의</p>
                  <p style={{ color: "#303030" }}>
                    회원등급은 일반회원등급 입니다.
                  </p>
                </div>
              </div>
              <div className="user-membership">
                <div className="membership-icon">
                  <img
                    src="https://lush.co.kr/data/skin/front/howling/img/etc/mypage_icons.png"
                    alt="membership-icon"
                  />
                  <div className="membership-info">
                    <div className="benefit">
                      <p>&nbsp;</p>
                      <p>혜택</p>
                      <p>0 장</p>
                    </div>
                    <div className="duckzzi">
                      <p>&nbsp;</p>
                      <p>덕찌</p>
                      <p>1 개</p>
                    </div>
                    <div className="question">
                      <p>&nbsp;</p>
                      <p>문의</p>
                      <p>0 건</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="address-section">
              <div className="section-head">
                <div className="head-text">
                  <h3 className="address-section-title">배송지 관리</h3>
                  <span>배송지 관리 내역 총 0건</span>
                </div>
                <button className="add-address">+ 새 배송지 추가</button>
              </div>
              <div className="address-info">
                <div className="address-name">
                  <p className="address-name-title">배송지이름</p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="recieve-user-name">
                  <p className="recieve-user-title"></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="address">
                  <p className="address-title"></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="phone-number">
                  <p className="phone-numer-title"></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="address-delete">
                  <p className="address-delete-title"></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;

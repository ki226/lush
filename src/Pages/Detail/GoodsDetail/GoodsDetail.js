import React, { Component } from "react";
import "./GoodsDetail.scss";
import "../../../../public/data";
// import naverpaycapture from "./Images/naverpaycapture.png";

class GoodsDetail extends Component {
  render() {
    const {
      image,
      product_name,
      hash_tag,
      price,
      weight,
      goods_total_price,
      total_price,
    } = this.props; //부모컴포넌트에서 프롭스로 받겠다.

    // 객체 비구조화 할당
    // this.props  price
    // const {  price } = this.props;
    console.log(this.props);
    return (
      <div className="GoodsDetailcontents">
        <div className="mainleft">
          <div className="picturebox">
            <img src={image} className="image" alt="메인사진" />
          </div>
          <div className="picturefootera">
            <img
              src={image}
              className="picturefooterimg"
              alt="하단메인이미지"
            />
          </div>
        </div>
        <div className="mainright">
          <div className="location">
            <div className="locationhome">
              <span className="home">홈</span>
            </div>
            <div className="locationwrap">
              <span className="home"> ➤</span>
              <select
                className="productselect"
                aria-required="true"
                aria-label="Select product"
                name="product"
              >
                <option>러쉬</option>
                <option>LUSH SPA</option>
              </select>
              <span className="home"> ➤ </span>
              <select
                className="productdetailselect"
                aria-required="true"
                aria-label="Select productdetail"
                name="productdetail"
              >
                <option>베스트</option>
                <option>신제품</option>
                <option>배쓰</option>
                <option>샤워</option>
                <option>보디</option>
                <option>페이스</option>
                <option>헤어</option>
                <option>메이크업</option>
                <option>퍼퓸</option>
                <option>기프트</option>
              </select>
              <span className="home"> ➤</span>
              <select
                className="productdetailselecta"
                aria-required="true"
                aria-label="Select productdetaila"
                name="productdetaila"
              >
                <option>배쓰 밤</option>
                <option>버블 바</option>
                <option>배쓰 오일</option>
                <option>펀</option>
                <option>젤리 밤</option>
              </select>
            </div>
          </div>
          <div className="header_wrapping">
            <div className="product_h1">
              <div className="product_name">{product_name}</div>
              <div className="product_img">
                {/* <img
                  src="/data/skin/front/howling/img/etc/bl_arrow.png"
                  alt="공유"
                />
                <img src="" alt="하트" /> */}
              </div>
            </div>
            <div className="hash_tag">{hash_tag}</div>
          </div>

          <div className="inner_right_box">
            <div className="allreview"> __개의 후기 보기</div>
            <div className="goodtoknow">Good to Know</div>
            <div className=" priceinfo">
              <div className="price">
                <div className="pricetext">판매가</div>
                <div className="price">₩ {price}</div>
              </div>
              <div className="goodsweight">
                <div className="goodsweightext">상품무게</div>
                <div className="weight">{weight}g</div>
              </div>

              <div className="ordercount">
                <div className="ordercounttext">구매수량</div>
                <div className="buttonbody">
                  <button className="count" onClick={this.props.minus}>
                    -
                  </button>
                  <div className="countbox">
                    <p className="countbox_text">{this.props.num}</p>
                  </div>

                  <button className="count" onClick={this.props.plus}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="endprice">
            <ul>
              <li className="price">
                <span className="pricetext">총 제품 금액</span>
                <span className="goods_total_price">₩{goods_total_price}</span>
              </li>

              <li className="total">
                <span className="totaltext">총 합계 금액</span>
                <span className="total_price">₩{total_price}</span>
              </li>
            </ul>
          </div>
          <div className="twobuttons">
            <div className="basketbutton">
              <p className="ordertexta">장바구니</p>
            </div>
            <div className="orderbutton">
              <p className="ordertext">주문하기</p>
            </div>
          </div>
          <div className="naverpay">
            <div className="naverpaytext">
              <p className="naverpay_text_en">NAVER</p>
              <p className="naverpay_text_ko_a">네이버ID로 간편구매</p>
            </div>
            <div className="naverbox">
              <div className="naver_N_box">
                <p className="naver_N">N</p>
              </div>
              <p className="pay_text">Pay 구매</p>
            </div>
            <div className="savebutton">
              <p className="save_text">찜</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoodsDetail;

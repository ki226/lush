import React, { Component } from "react";
import "./GoodsDetail.scss";
// import naverpaycapture from "./Images/naverpaycapture.png";

class GoodsDetail extends Component {
  render() {
    const {
      picture,
      productname,
      hashtag,
      pricenum,
      goodsweightnum,
      goods_total_price,
      total_price,
    } = this.props; //부모컴포넌트에서 프롭스로 받겠다.

    // 객체 비구조화 할당
    // this.props.pricenum
    // const { pricenum } = this.props;

    return (
      <div className="GoodsDetailcontents">
        <div className="mainleft">
          <div className="picturebox">
            <img src={picture} className="picture" alt="메인사진" />
          </div>
          <div className="picturefootera">
            <img
              src={picture}
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
              <select
                className="productselect"
                aria-required="true"
                aria-label="Select product"
                name="product"
              >
                <option>러쉬</option>
                <option>LUSH SPA</option>
              </select>
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

          <div className="productname">{productname}</div>
          <div className="hashtag">{hashtag}</div>

          <div className="allreview"> __개의 후기 보기</div>
          <div className="goodtoknow">Good to Know</div>
          <div className=" priceinfo">
            <div className="price">
              <div className="pricetext">판매가</div>
              <div className="pricenum">₩{pricenum}</div>
            </div>
            <div className="goodsweight">
              <div className="goodsweightext">상품무게</div>
              <div className="goodsweightnum">{goodsweightnum}g</div>
            </div>

            <div className="ordercount">
              <div className="ordercounttext">구매수량</div>
            </div>
          </div>

          {/* <span className="count">
                <button
                  type="button"
                  className="downcount"
                  title="감소"
                  value="dn^|^0"
                  // style="cursor:pointer"
                >
                  -
                </button>

                <input
                  type="rext"
                  className="countbtn"
                  title="수량"
                  data-key="0"
                  name="goodscnt[]"
                  value="1"
                  data-value="1"
                  data-stock="0"
                  onchange="goodsViewController.input_count_change(this,'1');return false;"
                />

                <button
                  type="button"
                  className="upcount"
                  title="증가"
                  value="up^|^0"
                  // style="cursor:pointer"
                >
                  +
                </button>
              </span> */}
          {/* <p>
                <input type="hidden" value="0" name="optionPriceSum[]" />
                <input type="hidden" value="0.00" name="option_price_0" />$
                <strong class="option_price_display_0">12,000</strong>
              </p> */}

          <div className="endprice">
            <ul>
              <li className="price">
                <span className="pricetext">총 제품 금액</span>
                <span className="goods_total_price">₩{goods_total_price}</span>
              </li>
              {/* <li className="discounton">
                    <span>총 할인 금액</span>
                    <strong className="total_benefit_price"></strong>
                  </li> */}
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
              <img src="" alt="네이버페이텍스트" />
            </div>
            <div className="naverbox">
              <p>sp</p>
            </div>
            <div className="savebutton">
              {" "}
              37 37
              {/* <img src={naverpaycapture} alt="찜" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoodsDetail;

import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  state = {};

  render() {
    return (
      <div
        className={`ProductDetail ${
          this.props.menuDown === 0 ? "product-show" : "hide"
        }`}
      >
        <div className="product-detail-layout">
          <ul className="product-list">
            <li className="product-title">베스트</li>
            <li className="product-cate">주간베스트</li>
            <li className="product-cate">별다섯개 후기</li>
            <li className="product-cate">온라인 전용</li>
            <li className="product-cate">국내제조</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">신제품</li>
            <li className="product-cate">보디스프레이</li>
            <li className="product-cate">버블 바 큐레이션</li>
            <li className="product-cate">스프링 컬렉션</li>
            <li className="product-cate">마더스&파더스</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">배쓰</li>
            <li className="product-cate">배쓰 밤</li>
            <li className="product-cate">버블 바</li>
            <li className="product-cate">배쓰 오일</li>
            <li className="product-cate">펀</li>
            <li className="product-cate">젤리 밤</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">샤워</li>
            <li className="product-cate">솝</li>
            <li className="product-cate">샤워 젤 & 젤리</li>
            <li className="product-cate">보디 컨디셔너</li>
            <li className="product-cate">샤워 오일</li>
            <li className="product-cate">샤워 밤</li>
            <li className="product-cate">스크럽 & 버터</li>
            <li className="product-cate">펀</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">보디</li>
            <li className="product-cate">클렌저</li>
            <li className="product-cate">로션</li>
            <li className="product-cate">핸드 앤 풋</li>
            <li className="product-cate">마사지 바</li>
            <li className="product-cate">더스팅 파우더</li>
            <li className="product-cate">쉐이빙 크림</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">페이스</li>
            <li className="product-cate">클렌저</li>
            <li className="product-cate">페이스 마스크</li>
            <li className="product-cate">토너</li>
            <li className="product-cate">모이스춰라이저</li>
            <li className="product-cate">프라이머</li>
            <li className="product-cate">립</li>
            <li className="product-cate">쉐이빙 크림</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">헤어</li>
            <li className="product-cate">샴푸 바</li>
            <li className="product-cate">샴푸</li>
            <li className="product-cate">드라이 샴푸</li>
            <li className="product-cate">컨디셔너</li>
            <li className="product-cate">트리트먼트</li>
            <li className="product-cate">스타일링</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">메이크업</li>
            <li className="product-cate">페이스 파우더</li>
            <li className="product-cate">아이 메이크업</li>
            <li className="product-cate">파운데이션</li>
            <li className="product-cate">스킨 틴트</li>
            <li className="product-cate">비건 브러쉬</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">퍼퓸</li>
            <li className="product-cate">보디 스프레이</li>
            <li className="product-cate">퍼퓸 라이브러리</li>
            <li className="product-cate">코어 레인지</li>
            <li className="product-cate">솔리드 퍼퓸</li>
            <li className="product-cate">위시 카드</li>
            <li className="product-cate">퍼퓸 낫렙</li>
          </ul>
          <ul className="product-list">
            <li className="product-title">기프트</li>
            <li className="product-cate">기프트 베스트</li>
            <li className="product-cate">1-3만원대</li>
            <li className="product-cate">4-6만원대</li>
            <li className="product-cate">7만원 이상</li>
            <li className="product-cate">낫렙</li>
            <li className="product-cate">스웨그</li>
            <li className="product-cate">악세서리</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

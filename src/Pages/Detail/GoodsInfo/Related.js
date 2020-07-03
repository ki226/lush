import React, { Component } from "react";
// npimport "./Related.css";
import GoodsInfo from "./GoodsInfo";
import "./Related.scss";
//related 에 있는 데이터 -> 배열을  map 함수 사용하기 위해 만드는 컴포넌트
class Related extends Component {
  render() {
    return (
      <>
        <div className="related_product">
          <div className="related_product_title">
            <p className="title_bold">함께하면 더 좋은 제품</p>
            <p className="title_normal">함께 사용하면 좋습니다.</p>
          </div>
          <div className="wrap_box">
            {this.props.related.map((product) => {
              return (
                <div className="box">
                  <div className="thumbnail">
                    <img
                      src={product.image}
                      className="related_img"
                      alt="추천이미지"
                    />
                  </div>
                  <div className="prdinfo">
                    <div className="txt">{product.product_name}</div>
                    <div className="price">{product.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Related;

import React, { Component } from "react";
import "./Goods.scss";
import latest from "./Images/latest.jpg";
import vegan from "./Images/vegan.jpg";
import soldout from "./Images/soldout.jpg";
import buttonWish from "./Images/btn_wish.png";
import buttonCart from "./Images/btn_cart.png";

class Goods extends Component {
  render() {
    const {
      product_number,
      product_name,
      image,
      price,
      stock,
      is_new,
      is_vegan,
      hash_tag,
      toggleCartModal,
    } = this.props;

    return (
      <div className="Goods">
        <div className="choice">
          {/* 링크 수정 필요 */}
          <div className="button-wish button">
            <img src={buttonWish} />
          </div>
          <div className="button-cart button">
            <img
              src={buttonCart}
              onClick={() => toggleCartModal(product_number)}
            />
          </div>
        </div>
        <div className="thumbnail">
          {/* <Link to={/goods/${id}} */}
          <a>
            <img className="thumbnail-img" src={image} />
          </a>
        </div>
        <div className="goods-info">
          <div className="condtion">
            {stock <= 0 && (
              <img className="condition-img" alt="sold out" src={soldout} />
            )}
            {is_new && (
              <img className="condition-img" alt="latest" src={latest} />
            )}
            {is_vegan && (
              <img className="condition-img" alt="vegan" src={vegan} />
            )}
          </div>
          <div className="text">
            <a href="#">
              <span className="goods-name">{product_name}</span>
              <span className="goods-tags">{hash_tag}</span>
            </a>
          </div>
          <div className="price">
            <div className="cost">
              <strong>￦ {price.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goods;

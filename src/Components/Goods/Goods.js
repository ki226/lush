import React, { Component } from "react";
import "./Goods.scss";

class Goods extends Component {
  render() {
    const {
      goods_no,
      goods_name,
      goods_path,
      thumbnail_path,
      goods_price,
      sold_out,
      latest,
      vegan,
      tags,
    } = this.props;

    return (
      <div className="Goods">
        <div className="choice">
          <a
            href={`https://lush.co.kr/goods/goods_view.php?goodsNo=${goods_path}`}
          >
            <span>❤️</span>
          </a>
          <a
            href={`https://lush.co.kr/goods/goods_view.php?goodsNo=${goods_path}`}
          >
            <span>👜</span>
          </a>
        </div>
        <div className="thumbnail">
          {/* <Link to={/goods/${id}} */}
          <a href={goods_path}>
            <img className="thumbnail-img" src={thumbnail_path} />
          </a>
        </div>
        <div className="goods-info">
          <div className="condtion">
            {/* {modifiers &&
              modifiers.length > 0 &&
              modifiers.map((modifier, idx) => (
                <img
                  key={modifier}
                  className="condition-img"
                  alt={modifier}
                  src={require(`./Images/${modifier}.jpg`)}
                />
              ))} */}
            {sold_out && (
              <img
                className="condition-img"
                alt="sold out"
                src={require(`./Images/soldout.jpg`)}
              />
            )}
            {latest && (
              <img
                className="condition-img"
                alt="latest"
                src={require(`./Images/latest.jpg`)}
              />
            )}
            {vegan && (
              <img
                className="condition-img"
                alt="vegan"
                src={require(`./Images/vegan.jpg`)}
              />
            )}
          </div>
          <div className="text">
            <a href={goods_path}>
              <span className="goods-name">{goods_name}</span>
              <span className="goods-tags">
                {tags.map((tag, idx) =>
                  idx === tags.length - 1 ? `#${tag}` : `#${tag} `
                )}
              </span>
            </a>
          </div>
          <div className="price">
            <div className="cost">
              <strong>
                ￦{" "}
                {`${goods_price.slice(
                  0,
                  goods_price.length - 3
                )},${goods_price.slice(goods_price.length - 3)}`}
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Goods;

import React, { Component } from "react";
import Goods from "Components/Goods";
import "./GoodsList.scss";

class GoodsList extends Component {
  render() {
    const { category_name, category_id, sub_category, results } = this.props;

    return (
      <div className="GoodsList">
        <div className="heading">
          <h2 className="category-name">{category_name}</h2>
        </div>
        <ul className="lower-category">
          {sub_category.map((category) => (
            <li key={category.category_id}>
              <span>
                <a
                  href={`https://lush.co.kr/goods/goods_list.php?cateCd=${category.category_id}`}
                  className={category.category_id === category_id ? "on" : null}
                >
                  {category.category_id.length === 6
                    ? "전체"
                    : category.category_name}
                  {`(${category.goods_count})`}
                </a>
              </span>
            </li>
          ))}
        </ul>
        <div className="goods-list">
          {results.map((result) => (
            <Goods
              key={result.goods_no}
              goods_no={result.goods_path}
              goods_name={result.goods_name}
              goods_path={result.goods_path}
              thumbnail_path={result.thumbnail_path}
              goods_price={result.goods_price}
              sold_out={result.sold_out}
              latest={result.latest}
              vegan={result.vegan}
              tags={result.tags}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GoodsList;

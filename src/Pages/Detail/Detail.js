import React, { Component } from "react";
import "./Detail.scss";
import "./GoodsDetail";
import "./GoodsInfo";
import "./GoodsReview";
import GoodsDetail from "./GoodsDetail";
import GoodsReview from "./GoodsReview";
import GoodsInfo from "./GoodsInfo";
import { DATA_PATH } from "config.js";
import Related from "./GoodsInfo/Related";
import "./GoodsInfo/Related.scss";

// 데이터를 받을 거고, 데이터를 읽을 거고, 그리고 사용자에게 보여줄거고.
class Detail extends Component {
  state = {
    num: 0,
    detailData: [],
  };

  componentDidMount() {
    fetch(DATA_PATH + "detailData.json")
      .then((res) => res.json())
      .then((res) => this.setState({ detailData: res.detail }));
  }

  plusHandler = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  minusHandler = () => {
    this.setState({
      num: this.state.num - 1,
    });
  };

  render() {
    const { detailData } = this.state;
    // console.log(this.state.detailData);
    return (
      <>
        {this.state.detailData.product_name && (
          <>
            <GoodsDetail
              num={this.state.num}
              plus={this.plusHandler}
              minus={this.minusHandler}
              oduct
              image={detailData.image}
              product_name={detailData.product_name}
              hash_tag={detailData.hash_tag}
              price={detailData.price}
              weight={detailData.weight}
            />
            <GoodsReview />
            <GoodsInfo
              video={detailData.video}
              html={detailData.html}
              related={detailData.related}
            />
            <Related related={detailData.related} />
          </>
        )}
      </>
    );
  }
}

export default Detail;

import React, { Component } from "react";
import "./Detail.scss";
import "./GoodsDetail";
import "./GoodsInfo";
import "./GoodsReview";
import GoodsDetail from "./GoodsDetail";
import GoodsReview from "./GoodsReview";
import GoodsInfo from "./GoodsInfo";
import { DATA_PATH } from "config.js";

// 데이터를 받을 거고, 데이터를 읽을 거고, 그리고 사용자에게 보여줄거고.
class Detail extends Component {
  state = {
    num: 0,
  };
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
  // fetch(DATA_PATH + "detailData.json").then;

  componentDidMount() {
    fetch(DATA_PATH + "detailData.json"){
      .then((res) => res.json());

    }

  }

  render() {
    return (
      <GoodsDetail
        num={this.state.num}
        plus={this.plusHandler}
        minus={this.minusHandler}
      />
      // <GoodsReview/>
      // <GoodsInfo/>
    );
  }
}

export default Detail;

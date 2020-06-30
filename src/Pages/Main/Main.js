import React, { Component } from "react";
import "./Main.scss";
import GoodsDetail from "Components/GoodsDetail";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <div>Main</div>
        <GoodsDetail />
      </div>
    );
  }
}

export default Main;

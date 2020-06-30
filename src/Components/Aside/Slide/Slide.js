import React, { Component } from "react";
import "./Slide.scss";

class Slide extends Component {
  render() {
    const { goods_no, src } = this.props;
    return (
      <div className="Slide">
        <a>
          <img src={src} />
        </a>
      </div>
    );
  }
}

export default Slide;

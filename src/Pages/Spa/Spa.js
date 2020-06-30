import React, { Component } from "react";
import "./Spa.scss";
import HeroBanner from "Components/HeroBanner";

class Spa extends Component {
  state = {};
  render() {
    return (
      <div className="Spa">
        <HeroBanner banner={"spaBanner"}></HeroBanner>
      </div>
    );
  }
}

export default Spa;

import React, { Component } from "react";
import "./Detail.scss";

class Detail extends Component {
  componentDidMount() {
    fetch("http://10.58.2.127:8000/goods/").then((res) => console.log(res));
  }

  render() {
    return (
      <>
        <div>ddsfdsf</div>
      </>
    );
  }
}
export default Detail;

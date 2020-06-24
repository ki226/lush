import React, { Component } from "react";
import Slide from "./Slide";
import "./Aside.scss";
import slide0 from "./Images/slide0.jpg";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpg";
import slide3 from "./Images/slide3.jpg";
import slide4 from "./Images/slide4.jpg";
import slide5 from "./Images/slide5.jpg";
import prev from "./Images/icon_prev.png";
import next from "./Images/icon_next.png";

class Aside extends Component {
  state = {
    currentSlideIndex: 1,
    lastSlideIndex: 7,
  };

  slider = React.createRef();

  componentDidMount() {
    const sliderNode = this.slider.current;

    const first_slide_clone = sliderNode.children[0].cloneNode(true);
    const last_slide_clone = sliderNode.children[
      sliderNode.children.length - 1
    ].cloneNode(true);

    sliderNode.insertBefore(last_slide_clone, sliderNode.children[0]);
    sliderNode.append(first_slide_clone);

    sliderNode.style.transform = `translate(-${280}px)`;
    setInterval(() => {
      this.handle_next();
    }, 5000);
  }

  handle_next = () => {
    const sliderNode = this.slider.current;
    this.setState((prevState) => {
      if (this.state.currentSlideIndex < this.state.lastSlideIndex) {
        sliderNode.style.transitionDuration = "0.5s";
        sliderNode.style.transform = `translate(-${
          280 * (this.state.currentSlideIndex + 1)
        }px)`;

        if (this.state.currentSlideIndex + 1 === this.state.lastSlideIndex) {
          setTimeout(() => {
            sliderNode.style.transitionDuration = "0s";
            sliderNode.style.transform = `translate(-${280}px)`;
            this.setState({ currentSlideIndex: 1 });
          }, 501);
        }
        return { currentSlideIndex: prevState.currentSlideIndex + 1 };
      }
    });
  };

  handle_previous = () => {
    const sliderNode = this.slider.current;
    if (this.state.currentSlideIndex > 0) {
      this.setState((prevState) => {
        sliderNode.style.transitionDuration = "0.5s";
        sliderNode.style.transform = `translate(-${
          280 * (this.state.currentSlideIndex - 1)
        }px)`;
        if (this.state.currentSlideIndex - 1 === 0) {
          setTimeout(() => {
            sliderNode.style.transitionDuration = "0s";
            sliderNode.style.transform = `translate(-${
              280 * (this.state.lastSlideIndex - 1)
            }px)`;
            this.setState({ currentSlideIndex: this.state.lastSlideIndex - 1 });
          }, 501);
        }
        return { currentSlideIndex: prevState.currentSlideIndex - 1 };
      });
    }
  };

  render() {
    return (
      <div className="Aside">
        <div className="viewport">
          <div className="btn-container">
            <button className="previous-btn" onClick={this.handle_previous}>
              <img src={prev} alt="prev button" />
            </button>
            <span>
              {this.state.currentSlideIndex === this.state.lastSlideIndex
                ? `1 / ${this.state.lastSlideIndex - 1}`
                : this.state.currentSlideIndex === 0
                ? `6 / ${this.state.lastSlideIndex - 1}`
                : `${this.state.currentSlideIndex} / ${
                    this.state.lastSlideIndex - 1
                  }`}
            </span>
            <button className="next-btn" onClick={this.handle_next}>
              <img src={next} alt="next button" />
            </button>
          </div>
          <div className="slider" ref={this.slider}>
            <Slide src={slide0} />
            <Slide src={slide1} />
            <Slide src={slide2} />
            <Slide src={slide3} />
            <Slide src={slide4} />
            <Slide src={slide5} />
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;

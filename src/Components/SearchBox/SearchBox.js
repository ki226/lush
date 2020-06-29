import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  state = {
    selectionClicked: false,
  };

  selectionHandler = () => {
    this.setState({ selectionClicked: !this.state.selectionClicked });
  };

  render() {
    const { selectionClicked } = this.state;
    const {
      options,
      buttonText,
      inputHandler,
      searchBy,
      searchByHandler,
      searchTerm,
      searchHandler,
    } = this.props;
    return (
      <div className="SearchBox">
        <div className="selection-box" onClick={this.selectionHandler}>
          <div className="options">
            <span className="option">{searchBy ? searchBy : options[0]}</span>
          </div>
          <div
            className={`arrow ${selectionClicked ? "arrow-up" : "arrow-down"}`}
          ></div>
          <div
            className={`list ${selectionClicked ? "on" : ""}`}
            onClick={searchByHandler}
          >
            {options.map((option) => (
              <div key={option}>
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
        <form>
          <input
            type="text"
            className="search-box"
            value={searchTerm}
            onChange={inputHandler}
          />
          <button className="search-button" onClick={searchHandler}>
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;

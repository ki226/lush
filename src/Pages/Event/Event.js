import React, { Component } from "react";
import SearchBox from "Components/SearchBox";
import "./Event.scss";

const SEARCH_BY_LIST = ["제목", "내용"];

class Event extends Component {
  state = {
    loading: true,
    stores: [],
    searchBy: SEARCH_BY_LIST[0],
    searchTerm: "",
    searchResult: [],
  };

  searchByHandler = (event) => {
    this.setState({ searchBy: event.target.textContent });
  };

  inputHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  searchHandler = (event) => {
    event.preventDefault();
    const { stores, searchBy, searchTerm } = this.state;
    const filteredStores =
      searchTerm === ""
        ? stores
        : searchBy === SEARCH_BY_LIST[0]
        ? stores.filter((store) => store.name.includes(searchTerm))
        : stores; // SEARCH_BY_LIST[1] 내용인 경우 필터링 추가 필요

    this.setState({ searchResult: filteredStores });
  };

  render() {
    const { loading, stores, searchBy, searchTerm, searchResult } = this.state;
    return (
      <div className="Event">
        <div className="heading">
          <h2>EVENT</h2>
          <SearchBox
            options={SEARCH_BY_LIST}
            searchBy={searchBy}
            searchTerm={searchTerm}
            buttonText={"검색"}
            inputHandler={this.inputHandler}
            searchByHandler={this.searchByHandler}
            searchHandler={this.searchHandler}
          />
          <div className="viewSelect">
            <p>
              전체(45) <b>| 진행중 이벤트(5) |</b> 종료한 이벤트(40)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

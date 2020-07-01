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
        : stores;

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
          <div className="view-select">
            <ul>
              <li className="all-event">전체(45) </li>
              <li className="current-event">진행중 이벤트(2)</li>
              <li className="end-event">종료된 이벤트(43)</li>
            </ul>
            <div className="event-main-container">
              <ul className="event-contents">
                <li className="list-item">
                  <img
                    className="content-image"
                    src="https://lush.co.kr/data/board/upload/event/86b1eb749a9a4bbb"
                    alt="event"
                  />
                  <div className="event-text">
                    <h3 className="event-title">향기로 디자인하다 (55)</h3>
                    <p className="event-info">러쉬 최애템으로 욕실 꾸미기</p>
                    <p className="event-term">
                      2020.06.22 00:00 - 2020.07.01 23:59
                    </p>
                  </div>
                </li>
                <li className="list-item item2">
                  <img
                    className="content-image"
                    src="https://lush.co.kr/data/board/upload/event/8631a49538679ebd"
                    alt="event"
                  />
                  <div className="event-text">
                    <h3 className="event-title">다운로드 러쉬 6월 (5)</h3>
                    <p className="event-info">라벤더 구름이 내 폰 안에</p>
                    <p className="event-term">
                      2020.06.05 00:00 - 2020.07.07 23:59
                    </p>
                  </div>
                </li>
                {/* <li className="list-item item3">
                  <img
                    className="content-image"
                    src="https://lush.co.kr/data/board/upload/event/86b1eb749a9a4bbb"
                    alt="event"
                  />
                  <div className="event-text">
                    <h3 className="event-title">향기로 디자인하다 (55)</h3>
                    <p className="event-info">러쉬 최애템으로 욕실 꾸미기</p>
                    <p className="event-term">2020.06.22 - 2020.07.01 23:59</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <span>1</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Event;

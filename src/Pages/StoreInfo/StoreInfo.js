import React, { Component, Fragment } from "react";
import SearchBox from "Components/SearchBox";
import Store from "./Store";
import "./StoreInfo.scss";

const SEARCH_BY_LIST = ["매장명", "내용"];

class StoreInfo extends Component {
  state = {
    loading: true,
    stores: [],
    searchBy: SEARCH_BY_LIST[0],
    searchTerm: "",
    searchResult: [],
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "storeData.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ stores: data.stores, searchResult: data.stores })
      )
      .catch((error) => console.log("Error Occured", error))
      .finally(() => this.setState({ loading: false }));
  }

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
      <div className="StoreInfo">
        <div className="heading">
          <h2>SHOP INFORMATION</h2>
          <p>러쉬 오프라인 매장을 소개합니다.</p>
        </div>
        <SearchBox
          options={SEARCH_BY_LIST}
          searchBy={searchBy}
          searchTerm={searchTerm}
          buttonText={"검색하기"}
          inputHandler={this.inputHandler}
          searchByHandler={this.searchByHandler}
          searchHandler={this.searchHandler}
        />
        {loading && stores.length > 0 ? null : (
          <Fragment>
            <div className="item-display">
              {searchResult.length > 0 ? (
                searchResult.map((store) => (
                  <Store key={store.name} store={store} />
                ))
              ) : (
                <p className="not-found">게시글이 존재하지 않습니다.</p>
              )}
            </div>
            {searchResult.length > 0 ? (
              <nav className="nav">
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                </ul>
              </nav>
            ) : null}
          </Fragment>
        )}
      </div>
    );
  }
}

export default StoreInfo;

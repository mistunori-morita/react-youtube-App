import React, { Component } from "react";
import SearchBar from "./SearchBar";
export default class App extends Component {
  //子コンポーネントから受け取ったコールバックを発火
  onTermSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        APP
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

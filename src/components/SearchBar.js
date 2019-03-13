import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "test"
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Viedo Search</label>
            <input type="text" value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

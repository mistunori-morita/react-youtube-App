import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    // todo:make suer we call

    //callback from parent compnent
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Viedo Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

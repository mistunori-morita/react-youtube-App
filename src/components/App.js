import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  state = {
    videos: []
  };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <div className="ui container">
        APP
        <SearchBar onFormSubmit={this.onTermSubmit} />i have{" "}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

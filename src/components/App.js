import { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    photos: [],
  };
  search = async (term) => {
    const res = await unsplash.get(`search/photos?query=${term}`);
    this.setState({ photos: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar submit={this.search}></SearchBar>
        <ImageList photos={this.state.photos}></ImageList>
      </div>
    );
  }
}

export default App;

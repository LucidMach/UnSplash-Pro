import { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Alert from "./Alert";

class App extends Component {
  state = {
    photos: [],
    alert: "",
  };

  search = async (term) => {
    const res = await unsplash.get(`search/photos?query=${term}`);
    this.setState({ photos: res.data.results });
  };

  alert = (msg) => {
    this.setState({ alert: msg });
    setTimeout(1000, () => this.setState({ alert: "" }));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar submit={this.search}></SearchBar>
        <ImageList photos={this.state.photos} alert={this.alert}></ImageList>
        {this.state.alert === "" ? (
          <Alert msg={"UnSplash Pro"}></Alert>
        ) : (
          <Alert msg={this.state.alert}></Alert>
        )}
      </div>
    );
  }
}

export default App;

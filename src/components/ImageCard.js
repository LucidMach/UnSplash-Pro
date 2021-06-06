import "./ImageCard.css";
import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () =>
      console.log(this.imageRef.current.clientWidth)
    );
  }

  render() {
    return (
      <div className="image-card">
        <img
          ref={this.imageRef}
          src={this.props.photo.urls.raw}
          alt={this.props.photo.description}
        />
      </div>
    );
  }
}

export default ImageCard;

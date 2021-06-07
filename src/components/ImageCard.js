import "./ImageCard.css";
import FileSaver from "file-saver";
import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  download = () => {
    FileSaver.saveAs(
      this.props.photo.urls.regular,
      `${this.props.photo.description}.jpg`
    );
  };

  copyHTML = () => {
    navigator.clipboard.writeText(
      `<img src="${this.props.photo.urls.regular}" alt="${this.props.photo.description}" />`
    );
    this.props.alert("Code Snippet Copied!");
  };

  copyURL = () => {
    navigator.clipboard.writeText(this.props.photo.urls.regular);
    this.props.alert("URL Copied!");
  };

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
          src={this.props.photo.urls.regular}
          alt={this.props.photo.description}
        />
        <div className="image-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={this.download}
          >
            <path d="M7 2v-2h10v2h-10zm0 4h10v-2h-10v2zm10 7v-5h-10v5h-6l11 11 11-11h-6z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={this.copyHTML}
          >
            <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={this.copyURL}
          >
            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default ImageCard;

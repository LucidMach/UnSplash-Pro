import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ photos }) => {
  const images = photos.map((photo) => (
    <ImageCard photo={photo} key={photo.id}></ImageCard>
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;

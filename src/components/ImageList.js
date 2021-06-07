import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ photos, alert }) => {
  const images = photos.map((photo) => (
    <ImageCard photo={photo} key={photo.id} alert={alert}></ImageCard>
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;

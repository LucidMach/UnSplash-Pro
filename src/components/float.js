import "./float.css";
import React from "react";

const Float = ({ logo, url }) => {
  return (
    <div className="float">
      <a href={url} target="_">
        {logo}
      </a>
    </div>
  );
};

export default Float;

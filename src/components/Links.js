import "./Links.css";
import React from "react";

const Float = ({ logos, urls }) => {
  const renderLinks = logos.map((logo, i) => {
    return (
      <a href={urls[i]} target="_">
        {logo}
      </a>
    );
  });

  return <div className="float">{renderLinks}</div>;
};
export default Float;

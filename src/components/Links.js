import "./Links.css";
import React from "react";

const Links = ({ logos, urls }) => {
  const renderLinks = logos.map((logo, i) => {
    return (
      <a key={urls[i]} href={urls[i]} target="_">
        {logo}
      </a>
    );
  });

  return <div className="float">{renderLinks}</div>;
};
export default Links;

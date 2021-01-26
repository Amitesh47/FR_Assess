import React from "react";
import "./DefaultImages.css";

const DefaultImages = (props) => {
  const { heading } = props;

  return (
    <div className="defaultImages">
      {heading && <h2>{heading}</h2>}
      <h2 className="searchInfo">Please search for any image above!!!</h2>
    </div>
  );
};

export default DefaultImages;

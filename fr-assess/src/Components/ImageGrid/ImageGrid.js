import React from "react";
import { useSelector } from "react-redux";
import DefaultImages from "../DefaultImages/DefaultImages";
import SearchedImages from "../SearchedImages/SearchedImages";
import "./ImageGrid.css";

const ImageGrid = (props) => {
  const imagesToRenderArray = useSelector((state) => state.searchResults);
  const currentState = useSelector((state) => state.currentState);
  return (
    <div className="imageGrid">
      {!currentState && imagesToRenderArray.length > 0 ? (
        <SearchedImages imagesArray={imagesToRenderArray} />
      ) : (
        <DefaultImages heading={currentState} />
      )}
    </div>
  );
};

export default ImageGrid;

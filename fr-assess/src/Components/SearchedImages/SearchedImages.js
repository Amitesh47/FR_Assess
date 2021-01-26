import React from "react";
import ImageCard from '../ImageCard/ImageCard'
import "./SearchedImages.css";

const SearchedImages = (props) => {
  return (
    <div className="image-list">
      {props.imagesArray.map((image) => {
        return <ImageCard src={image.previewURL} key={image.id} />;
      })}
    </div>
  );
};

export default SearchedImages;

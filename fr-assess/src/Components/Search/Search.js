import React from "react";
import SearchHeading from "../SearchHeading/SearchHeading";
import SearchBar from "../SearchBar/SearchBar";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchContainer">
      <SearchHeading />
      <SearchBar />
    </div>
  );
};

export default Search;

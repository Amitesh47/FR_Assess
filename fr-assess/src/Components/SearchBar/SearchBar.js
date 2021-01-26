import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import "./SearchBar.css";
import { makeApiCall } from "../../utils/makeApiCall";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const searchHandler = async () => {
    if (!searchValue) {
      return null;
    }
    const response = await makeApiCall(searchValue)
    if (response.hits.length === 0) {
      return dispatch({
        type: "SEARCH_FAIL",
      });
    } else {
      dispatch({
        type: "reset",
      });
      return dispatch({
        type: "SEARCH_SUCCESS",
        payload: response.hits,
      });
    }
  };

  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search for Images"
        onChange={(e) => onChangeHandler(e)}
      />
      <Button name="Search" onClick={searchHandler} />
    </div>
  );
};

export default SearchBar;

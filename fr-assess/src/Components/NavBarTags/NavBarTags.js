import React from "react";
import { useDispatch } from "react-redux";
import "./NavBarTags.css";

const NavBarTags = (props) => {
  const dispatch = useDispatch();

  const changeTabHandler = (tabNumber) => {
    dispatch({
      type: "SEARCH_FAIL",
    });
    dispatch({
      type: tabNumber,
    });
  };

  const handleResponsiveness = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "tagList") {
      x.className += " responsive";
    } else {
      x.className = "tagList";
    }
  };

  return (
    <div className="navbarTags">
      <ul className="tagList" id="myTopnav">
        <li onClick={() => changeTabHandler("1")}>Photos</li>
        <li onClick={() => changeTabHandler("2")}>Illustration</li>
        <li onClick={() => changeTabHandler("3")}>Music</li>
        <li onClick={() => changeTabHandler("4")}>Videos</li>
        <li onClick={() => changeTabHandler("5")}>About</li>
        <a className="icon" onClick={handleResponsiveness}>
          <i className="fa fa-bars"></i>
        </a>
      </ul>
    </div>
  );
};

export default NavBarTags;

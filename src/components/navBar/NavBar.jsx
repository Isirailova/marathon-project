import React from "react";
import logoImage from "../../assets/images/IMG_3745-removebg-preview.png";
import "./navBar.style.scss";

const NavBar = ({ handleClick, handleRacePage }) => {
  const handleRaceSelect = (event) => {
    handleClick("race");
    handleRacePage();
  };
  return (
    <div className="navbar">
      <a href="#" className="navbar__logo" onClick={() => handleClick("logo")}>
        <img src={logoImage} alt="Logo" />
      </a>
      <div className="navbar__links">
        <a href="#" onClick={() => handleClick("race")}>
          RACE
        </a>
        <a href="#" onClick={() => handleClick("gallery")}>
          GALLERY
        </a>
        <a href="#" onClick={() => handleClick("info")}>
          INFO
        </a>
        <a href="#" onClick={() => handleClick("sponsors")}>
          SPONSORS
        </a>
      </div>
      <div className="navbar__btn">
        <button href="#" id="register" onClick={() => handleClick("register")}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default NavBar;

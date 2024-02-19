import React from "react";
import logoImage from "../../assets/images/logo.jpg";
import "./navBar.style.scss";

const NavBar = ({ handleClick, handleRacePage }) => {
  // Receive handleRacePage function
  const handleRaceSelect = (event) => {
    handleClick("race"); // Change to handle race page in App component
    handleRacePage(); // Call handleRacePage function
  };
  return (
    <div className="navbar">
      <a href="#" className="navbar__logo" onClick={() => handleClick("logo")}>
        <img src={logoImage} alt="Logo" />
      </a>
      <div className="navbar__links">
        <a href="#" onClick={() => handleClick("race")}>
          Race
        </a>
        <a href="#" onClick={() => handleClick("gallery")}>
          Gallery
        </a>
        <a href="#" onClick={() => handleClick("info")}>
          Info
        </a>
        <a href="#" onClick={() => handleClick("sponsors")}>
          Sponsors
        </a>
        <a href="#" id="register" onClick={() => handleClick("register")}>
          Register
        </a>
      </div>
    </div>
  );
};

export default NavBar;

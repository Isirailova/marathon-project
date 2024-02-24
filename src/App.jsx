import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import RegisterPage from "./components/registerPage/RegisterPage";
import InfoPage from "./components/infoPage/InfoPage";
import SponsorsPage from "./components/sponsorsPage/SponsorsPage";
import HomePage from "./components/homePage/HomePage";
import RacePage from "./components/racePage/RacePage";
import "./App.css";

function App() {
  const [showPages, setShowPages] = useState({
    register: false,
    info: false,
    sponsors: false,
    home: true,
    race: false, // Add race page state
  });

  const handleClick = (linkId) => {
    setShowPages({
      register: linkId === "register",
      info: linkId === "info",
      sponsors: linkId === "sponsors",
      home: linkId === "logo" || linkId === "home",
      race: linkId === "race", // Update race page state
    });
  };

  const handleRacePage = () => {
    setShowPages({
      register: false,
      info: false,
      sponsors: false,
      home: false,
      race: true, // Show race page
    });
  };

  return (
    <div className="App">
      <NavBar handleClick={handleClick} handleRacePage={handleRacePage} />{" "}
      {showPages.home && <HomePage />}
      {showPages.register && <RegisterPage />}
      {showPages.info && <InfoPage />}
      {showPages.sponsors && <SponsorsPage />}
      {showPages.race && <RacePage />}
    </div>
  );
}

export default App;

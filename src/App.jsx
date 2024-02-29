import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./components/homePage/HomePage";
import RacePage from "./components/racePage/RacePage";
import GalleryPage from "./components/galleryPage/GalleryPage";
import RegisterPage from "./components/registerPage/RegisterPage";
import InfoPage from "./components/infoPage/InfoPage";
import SponsorsPage from "./components/sponsorsPage/SponsorsPage";
import "./App.css";

function App() {
  const [showPages, setShowPages] = useState({
    register: false,
    info: false,
    sponsors: false,
    home: true,
    race: false,
    gallery: false,
  });

  const [selectedRace, setSelectedRace] = useState("");
  const handleClick = (linkId) => {
    setShowPages({
      register: linkId === "register",
      info: linkId === "info",
      sponsors: linkId === "sponsors",
      home: linkId === "logo" || linkId === "home",
      race: linkId === "race",
      gallery: linkId === "gallery",
    });
  };

  const handleRacePage = (distance) => {
    setSelectedRace(distance);
    setShowPages({
      register: false,
      info: false,
      sponsors: false,
      home: false,
      race: true,
      gallery: false,
    });
  };

  return (
    <div className="App">
      <NavBar handleClick={handleClick} handleRacePage={handleRacePage} />
      {showPages.home && <HomePage />}
      {showPages.register && <RegisterPage />}
      {showPages.info && <InfoPage />}
      {showPages.sponsors && <SponsorsPage />}
      {showPages.race && <RacePage selectedRace={selectedRace} />}
      {showPages.gallery && <GalleryPage />}
    </div>
  );
}

export default App;

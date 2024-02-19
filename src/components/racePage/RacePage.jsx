import React, { useState } from "react";
import image5 from "../../assets/images/5km.jpg";
import image10 from "../../assets/images/10km.jpg";
import image15 from "../../assets/images/15km.jpg";
import "./racePage.style.scss"; // Import CSS file for styling

const RacePage = () => {
  const [selectedRace, setSelectedRace] = useState("");

  const raceImages = {
    "5km": image5,
    "10km": image10,
    "15km": image15,
  };

  const handleRaceSelect = (event) => {
    setSelectedRace(event.target.value);
  };

  return (
    <div className="race-page">
      <p>Selected Race: {selectedRace}</p>
      <select onChange={handleRaceSelect} value={selectedRace}>
        <option value="">Race</option>
        <option value="5km">5km</option>
        <option value="10km">10km</option>
        <option value="15km">15km</option>
      </select>
      {selectedRace && (
        <img src={raceImages[selectedRace]} alt={selectedRace} />
      )}
    </div>
  );
};

export default RacePage;

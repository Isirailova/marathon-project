import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./racePage.style.scss";

const RacePage = () => {
  const [selectedRace, setSelectedRace] = useState("");

  const raceLocations = {
    "5km":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.368752663268!2d-88.00889248481777!3d42.05155839739033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f7bf4f9d57525%3A0xa823acdad5733d2b!2sBusse%20Woods%2C%20Illinois%2060008%2C%20USA!5e0!3m2!1sen!2s!4v1645320842214!5m2!1sen!2s",
    "10km":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.368752663268!2d-88.00889248481777!3d42.05155839739033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f7bf4f9d57525%3A0xa823acdad5733d2b!2sBusse%20Woods%2C%20Illinois%2060008%2C%20USA!5e0!3m2!1sen!2s!4v1645320842214!5m2!1sen!2s",
    "15km":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.368752663268!2d-88.00889248481777!3d42.05155839739033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f7bf4f9d57525%3A0xa823acdad5733d2b!2sBusse%20Woods%2C%20Illinois%2060008%2C%20USA!5e0!3m2!1sen!2s!4v1645320842214!5m2!1sen!2s",
  };

  const handleRaceSelect = (event) => {
    setSelectedRace(event.target.value);
  };

  return (
    <div className="race__page">
      <p className="location-container">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <a
          href="https://maps.google.com?q=Busse+Woods+IL+60008"
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          Busse Woods, IL 60008
        </a>
      </p>

      <p>Selected Race: {selectedRace}</p>
      <select onChange={handleRaceSelect} value={selectedRace}>
        <option value="">Race</option>
        <option value="5km">5km</option>
        <option value="10km">10km</option>
        <option value="15km">15km</option>
      </select>
      {selectedRace && (
        <iframe
          title="Google Maps"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={raceLocations[selectedRace]}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      )}
    </div>
  );
};

export default RacePage;

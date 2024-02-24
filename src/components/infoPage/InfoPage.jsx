import React from "react";
import way from "../../assets/images/way.jpeg";
import "./infoPage.style.scss";

const InfoPage = () => {
  return (
    <div className="container">
      <div className="container__background">
        <img src={way} alt="way line"></img>
        <div className="container__overlay"></div>
      </div>

      <div className="container__content">
        <h1>Saturday, May 11, 2024</h1>
        <table className="container__content__table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:00 am - 8:30 am</td>
              <td>Meeting & Greeting</td>
            </tr>
            <tr>
              <td>8:30 am - 9:00 am</td>
              <td>Warm-up Session</td>
            </tr>
            <tr>
              <td>9:00 am</td>
              <td>5km Race Start</td>
            </tr>
            <tr>
              <td>9:15 am</td>
              <td>10km Race Start</td>
            </tr>
            <tr>
              <td>9:30 am</td>
              <td>15km Race Start</td>
            </tr>
            <tr>
              <td>12:00 am - 13:00 am</td>
              <td>Congratulations & Awards</td>
            </tr>
            <tr>
              <td>13:00 pm</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>15:00 pm</td>
              <td>Concert</td>
            </tr>
          </tbody>
        </table>
        <div className="container__content__details">
          <p>
            <strong>Address:</strong>{" "}
            <a
              href="https://maps.google.com?q=Busse+Woods+IL+60008"
              target="_blank"
              rel="noopener noreferrer"
            >
              Busse Woods, IL 60008
            </a>
          </p>
          <p>
            <strong>Marathon's Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/silkwayrun?igsh=MXYwaHNrMzVtNXZwNg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @silkwayrun
            </a>
          </p>
          <p>
            <strong>Organizers:</strong>{" "}
            <a
              href="https://www.instagram.com/geeknetwork.io?igsh=MWdjcWF2MGUyZmgydg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @geeknetwork.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;

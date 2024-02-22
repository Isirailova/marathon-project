import React, { useState, useEffect } from "react";
import "./homePage.style.scss";
import finish from "../../assets/images/finish.jpg";

const HomePage = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date("May 11, 2024 00:00:00").getTime();
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown(
          <div className="countdown">
            <span className="countdown__unit">
              <span className="countdown__unit__number">{days}</span>
              <span className="countdown__unit__label">days</span>
            </span>
            ・
            <span className="countdown__unit">
              <span className="countdown__unit__number">{hours}</span>
              <span className="countdown__unit__label">hours</span>
            </span>
            ・
            <span className="countdown__unit">
              <span className="countdown__unit__number">{minutes}</span>
              <span className="countdown__unit__label">minutes</span>
            </span>
            ・
            <span className="countdown__unit">
              <span className="countdown__unit__number">{seconds}</span>
              <span className="countdown__unit__label">seconds</span>
            </span>
          </div>
        );
      } else {
        setCountdown("The marathon has started!");
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__background">
        <img src={finish} alt="Marathon Finish Line"></img>
        <div className="homepage__overlay"></div>
      </div>
      <div className="homepage__content">
        <p className="homepage__content__description">
          {countdown}
          "Join us in anticipation as we count down the days, hours, minutes,
          and seconds until the exhilarating marathon event on May 11, 2024!
          Every tick of the clock brings us closer to an unforgettable
          experience filled with determination, camaraderie, and triumph. Let
          the excitement build as we prepare to lace up our shoes and embark on
          this incredible journey together!"
        </p>{" "}
      </div>
    </div>
  );
};

export default HomePage;

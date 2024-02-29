import React from "react";
import jti from "../../assets/images/jti.jpg";
import "./sponsorsPage.style.scss";

const SponsorsPage = () => {
  return (
    <div className="sponsors">
      <div className="sponsors__background">
        <img src={jti} alt="jti" />
        <div className="sponsors__overlay"></div>
      </div>
      <div className="sponsors__content">
        <h2>Our Sponsors</h2>

        <p>
          We extend our deepest gratitude to our esteemed partners and sponsors,
          whose unwavering dedication and generous contributions have been
          instrumental in making our event a resounding success. It is through
          their invaluable support that we are able to bring our vision to life
          and provide a memorable experience for all participants.
          <br />
          <br />
          Together with the vibrant community of Chicago, our partners and
          sponsors have provided us with invaluable resources, invaluable
          insights, and an abundance of passion for the sport of running. Their
          commitment to our event underscores their belief in its significance
          and impact, and we are truly honored to have them by our side.
          <br />
          <br />
          As we come together to celebrate this extraordinary event, we extend
          our heartfelt thanks to each and every one of our partners and
          sponsors. Your support fuels our passion and inspires us to continue
          pushing the boundaries of excellence in the running community. We look
          forward to continuing this journey together, creating lasting memories
          and forging meaningful connections with runners from around the world.
        </p>
        {/* <p>
          We would like to express our gratitude to the following sponsors for
          their generous support:
        </p> */}
        {/* <div className="sponsors__content__container">
          <div className="sponsors__content__container__image">
            <img
              src="https://i.pinimg.com/280x280_RS/58/73/a1/5873a1838aeb89d8e034dbcc60e55db2.jpg"
              alt="Sponsor 1"
            />
          </div>
          <div className="sponsors__content__container__image">
            <img
              src="https://static.tildacdn.com/tild3038-6535-4461-b238-646636353964/BlueLogoBig.png"
              alt="Sponsor 2"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SponsorsPage;

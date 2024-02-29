import React, { useState, useRef } from "react";
import video from "../../assets/videos/marathon.MP4";
import "./galleryPage.style.scss";

const GalleryPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__background">
        <img
          src="https://wallpapercrafter.com/desktop6/1646537-sunset-sun-three-quarter-orb-white-centre-glowing.jpg"
          alt="Marathon"
        ></img>
        <div className="gallery__overlay"></div>
      </div>
      <div className="gallery__video">
        <video
          ref={videoRef}
          className="gallery__video__part"
          controls
          onClick={togglePlay}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default GalleryPage;

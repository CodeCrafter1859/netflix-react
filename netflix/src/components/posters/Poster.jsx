import React from "react";
import "./Poster.css";

const Poster = ({ imageUrl }) => {
  return (
    <div className="poster-container">
      <img src={imageUrl} alt="poster" className="poster-image" />
    </div>
  );
};

export default Poster;

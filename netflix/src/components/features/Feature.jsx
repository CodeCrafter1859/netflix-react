import React from "react";
import "./Features.css";

const Feature = ({ headline, description, svgIcon }) => {
  return (
    <div className="features-container">
      <h3>{headline}</h3>
      <p>{description}</p>
      <div className="feature-icon">{svgIcon}</div>
    </div>
  );
};

export default Feature;

import React from "react";
import "./MainComponent.css";
import EmailComponent from "./EmailComponent";

const MainComponent = () => {
  return (
    <div className="background-container">
      <div className="content">
        <div className="main-heading">Unlimited movies, TV shows and more</div>
        <div className="subscription-heading">Starts at ₹149. Cancel at any time.</div>
        <br />
        <EmailComponent/>
      </div>
    </div>
  );
};

export default MainComponent;

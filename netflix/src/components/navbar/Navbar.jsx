import React from "react";
import { ReactComponent as NetflixLogo } from "../Assets/netflix.svg";
import "./Navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <NetflixLogo className="netflix-logo" />
      <div className="container">
        <Button/>
      <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

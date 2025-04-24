import React from "react";
import '../navbar/Navbar.css'
const Button = () => {
  return (
    <>
      <select id="dropdown" name="options">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </>
  );
};

export default Button;

import React from "react";
import EmailComponent from "../maincomponent/EmailComponent";
import "./Footer.css";
import FaqComponent from "./FaqComponent";
import faqs from "./faq.json";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <h3>footer</h3> */}
      <div className="input-container">
        <EmailComponent />
      </div>
      <p>
        Questions? Call <a href="#">000-800-919-1743</a>
      </p>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FaqComponent
            key={index}
            first={faq[0]}
            second={faq[1]}
            third={faq[2]}
            fourth={faq[3]}
          />
        ))}
      </div>
      <br />
      <div className="end-container">
        <Button/>
        <p>Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;

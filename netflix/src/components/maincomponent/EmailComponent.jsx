import React, { useRef } from "react";
import './MainComponent.css'

const EmailComponent = () => {
  const inputRef = useRef()

  const handleClick = () =>{
    inputRef.current.focus()
  }
  return (
    <div>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="mail-conatiner">
        <input type="email" placeholder="Email address" ref={inputRef} required />
        <button onClick={handleClick} className="btn-started">Get Started </button>
      </div>
    </div>
  );
};

export default EmailComponent;

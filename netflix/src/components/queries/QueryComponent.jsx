import React from "react";
import "./QueryComponent.css";
import { ReactComponent as PlusIcon } from "../Assets/plusIcon.svg";

const QueryComponent = ({ query, answer, isOpen, onClick }) => {
  return (
    <>
      <div
        className="query-container"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <p>{query}</p>
        <div className="icon-container">
          <PlusIcon className={`plus-icon ${isOpen ? "rotate" : ""}`} />
        </div>
      </div>

      {isOpen && (
        <div className="answer-container">
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};

export default QueryComponent;

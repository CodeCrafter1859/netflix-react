import React, { useState } from "react";
import "./Queries.css";
import queries from "./query.json";
import QueryComponent from "./QueryComponent";

const Queries = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="queries-container">
      <h2>Frequently Asked Questions</h2>
      <div className="queries-list">
        {queries.map((query, index) => (
          <QueryComponent
            key={index}
            query={query.query}
            answer={query.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Queries;

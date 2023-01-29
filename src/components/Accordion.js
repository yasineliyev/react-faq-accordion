import React from "react";

function Accordion({ title, answer, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>Cavabı</span>
        </div>
      </div>
      <div className={`${active === title ? "show" : ""} accordionContent`}>
        <div className="container">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;

import React, { useState } from "react";
import list from "../../data/AccordionList";
import "./style.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <h1>Accordion Component</h1>
      <div className="border-wrapper">
        {list.map((item, i) => {
          return (
            <div key={i} className="accordionWrapper">
              <button
                className="accordionHeader flexWrapper spaceBetween"
                onClick={() => toggleAccordion(i)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === i ? "-" : "+"}</span>
              </button>
              <div
                className={`accordionContent ${
                  activeIndex === i ? "show" : ""
                }`}
              >
                <div className="accordionInner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;

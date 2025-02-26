import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <button
                className="accordion-header"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                <h3>{title}</h3>
                <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
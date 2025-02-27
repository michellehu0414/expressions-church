import React from "react";
import "./GetInvolvedSection.scss";
import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";
import TeamsAccordionList from "@components/TeamsAccordionList/TeamsAccordionList";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";
import "@scss/utilities/_all-utilities.scss";

const GetInvolvedSection = () => {
  return (
    <section className="getInvolvedSection">
      <h2><span className="outlined">Get</span> Involved</h2>
      <div className="sectionContent">
        <GetInvolvedCards id="serve-sgv-card" />
        <ChalkDivider variant="white" className="scaleXNeg1" />
        <GetInvolvedCards id="find-community-card" />
        <ChalkDivider variant="white" />
        <div className="serve">
          <GetInvolvedCards id="serve-card" />
          <TeamsAccordionList />
          <h3>Not sure? Let's chat!</h3>
          <p>Submit an dinterest form anyway, and we'll discern how you can contribute your God-given gifts or talents.</p>
          <button className="primaryButton bg-white" variant="white" href="/">Submit Interest Form</button>
        </div>
        <ChalkDivider variant="white" className="rotate180" />
        <GetInvolvedCards id="give-card" />
        <ChalkDivider variant="white" />
        <GetInvolvedCards id="fire-relief-card" />
        <ChalkDivider variant="white" className="transformNone" />
        <GetInvolvedCards id="partner-card" />
        <ChalkDivider variant="white" />
        <GetInvolvedCards id="newcomer-connect-card" />
      </div>
    </section >
  );
};

export default GetInvolvedSection;

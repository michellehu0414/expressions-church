import React from "react";
import "./GetInvolvedSection.scss";
import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";
import TeamsAccordionList from "@components/TeamsAccordionList/TeamsAccordionList";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";
import transformStyles from "@scss/utilities/_transform.scss";

const GetInvolvedSection = () => {
  return (
    <section className="get-involved-section">
      <h2><span className="outlined">Get</span> Involved</h2>
      <div className="sectionContent">
        <GetInvolvedCards id="serve-sgv-card" />
        <ChalkDivider variant="white" className="scaleXNeg1" />
        <GetInvolvedCards id="find-community-card" />
        <ChalkDivider variant="white" />
        <GetInvolvedCards id="serve-card" />
        <TeamsAccordionList />
        <ChalkDivider variant="white" className="rotate180" />
        <GetInvolvedCards id="give-card" />
        <ChalkDivider variant="white" />
        <GetInvolvedCards id="fire-relief-card" />
        <ChalkDivider variant="white" className="transformNone" />
        <GetInvolvedCards id="partner-card" />
        <ChalkDivider variant="white" />
        <GetInvolvedCards id="newcomer-connect-card" />
        <ChalkDivider variant="white" />
      </div>
    </section>
  );
};

export default GetInvolvedSection;

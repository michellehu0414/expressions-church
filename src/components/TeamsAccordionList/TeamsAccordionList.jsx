// src/pages/About.jsx
import React, { Component } from "react";
import PaperBackgroundContainer from "@components/PaperBackgroundContainer/PaperBackgroundContainer";
import AccordionList from "@components/AccordionList/AccordionList";
import "./TeamsAccordionList.scss";
import { serveTeamsData } from "@data/serveTeamsData"; // ✅ Import data

const TeamsAccordionSection = () => {
  return (
    <PaperBackgroundContainer className="teamsContainer"
      headline="Our Teams"  // ✅ Displays a title      // ✅ Shows a divider
      content={
        <AccordionList items={serveTeamsData} />
      } // ✅ Renders any JSX inside it
    />
  );
};

export default TeamsAccordionSection;
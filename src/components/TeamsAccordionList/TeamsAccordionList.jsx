// src/pages/About.jsx
import React, { Component } from "react";
import PaperBackgroundContainer from "@components/PaperBackgroundContainer/PaperBackgroundContainer";
// import AccordionList from "@components/AccordionList/AccordionList";
import Accordion from "../Accordion/Accordion";
import * as styles from "./TeamsAccordionList.module.scss";
import { serveTeamsData } from "@data/serveTeamsData"; // ✅ Import data

const TeamsAccordionSection = () => {
  return (
    <PaperBackgroundContainer className={styles.teamsContainer}
      headline="Our Teams"  // ✅ Displays a title      // ✅ Shows a divider
      content={
        <section>
          {serveTeamsData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </section>
      } // ✅ Renders any JSX inside it
    />
  );
};

export default TeamsAccordionSection;
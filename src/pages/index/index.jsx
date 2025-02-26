import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import GetInvolvedSection from "./sections/GetInvolvedSection";
import IntroSection from "./sections/IntroSection";
import SubsplashEventsEmbed from "../../components/SubsplashEventsEmbed"; "@components/SubsplashEventsEmbed";

const injectSection = (Component, elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<Component />);
  }
};

// Inject each section where its placeholder div exists
injectSection(IntroSection, "intro-section");
injectSection(GetInvolvedSection, "get-involved-section");
injectSection(SubsplashEventsEmbed, "subsplash-events-embed");
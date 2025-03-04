import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import IntroSection from "./sections/IntroSection";
import GetInvolvedSection from "./sections/GetInvolvedSection";
import SundayServiceSection from "./sections/SundayServiceSection";
import PYVSection from "./sections/PYVSection";
import '@components/SubsplashEventsEmbed/SubsplashEventsEmbed.scss';

const injectSection = (Component, elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<Component />);
  }
};

const injectComponent = (Component, elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<Component />);
  }
};

// Inject each section where its placeholder div exists
injectSection(IntroSection, "intro-section");
injectSection(GetInvolvedSection, "get-involved-section");
injectSection(SundayServiceSection, "sunday-service-section");
injectSection(PYVSection, "pyv-section");
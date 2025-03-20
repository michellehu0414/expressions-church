console.log("index.min.js is running!");

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
// Inject each section where its placeholder div exists
injectSection(IntroSection, "intro-section");
injectSection(GetInvolvedSection, "get-involved-section");
injectSection(SundayServiceSection, "sunday-service-section");
injectSection(PYVSection, "pyv-section");

document.addEventListener("DOMContentLoaded", function () {
  console.log("index.min.js is running!");
  console.log(document.getElementById("intro-section")); // Debugging check
  console.log(document.getElementById("get-involved-section")); // Debugging check
  console.log(document.getElementById("sunday-service-section")); // Debugging check
  console.log(document.getElementById("pyv-section")); // Debugging check
});

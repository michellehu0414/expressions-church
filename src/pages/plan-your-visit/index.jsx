import React from "react";
import ReactDOM from "react-dom/client";
import "./plan-your-visit.scss";
import PYVSection from "./sections/PYVSection";
import PageBanner from "@components/PageBanner/PageBanner";

const PageBannerSection = () => {
  return (
    <PageBanner
      backgroundImage="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/expressions-exterior-expanded-scaled.webp"
      titleOutlinedText="plan your"
      titleFilledText="visit"
      primaryButtonText="Get Started"
      primaryButtonLink="/get-started"
      secondaryButtonText="Learn More"
      secondaryButtonLink="/learn-more"
      showPrimaryButton={true}
      showSecondaryButton={false}
    />
  );
};

const injectComponent = (Component, elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<Component />);
  }
};

injectComponent(PageBannerSection, "page-banner");
injectComponent(PYVSection, "pyv-section");
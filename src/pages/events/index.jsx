import React from "react";
import ReactDOM from "react-dom/client";
import "./events.scss";
import PageBanner from "@components/PageBanner/PageBanner";

const PageBannerSection = () => {
    return (
        <PageBanner
            backgroundImage="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/expressions-exterior-expanded-scaled.webp"
            titleOutlinedText="upcoming"
            titleFilledText="events"
            primaryButtonText="See all events"
            primaryButtonLink="/get-started"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/learn-more"
            showPrimaryButton={false}
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


// Inject each section where its placeholder div exists
// injectSection(IntroSection, "intro-section");
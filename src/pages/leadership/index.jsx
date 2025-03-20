import React from "react";
import ReactDOM from "react-dom/client";
import "./leadership.scss";
import PageHeader from "@components/PageHeader/PageHeader";
import MailchimpSignupEmbed from "@components/MailchimpSignupEmbed/MailchimpSignupEmbed";

const PageHeaderSection = () => {
    return (
        <PageHeader
            backgroundImage="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/expressions-exterior-expanded-scaled.webp"
            titleOutlinedText="our"
            titleFilledText="leadership"
            primaryButtonText="Get Started"
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

// Inject each section where its placeholder div exists
// injectSection(IntroSection, "intro-section");

injectComponent(PageHeaderSection, "page-header");
injectComponent(MailchimpSignupEmbed, "mailchimp-signup-embed");

document.addEventListener("DOMContentLoaded", function () {
    console.log("My script is running!");
});

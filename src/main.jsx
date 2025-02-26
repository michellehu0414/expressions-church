import React from "react";
import { injectElements } from "@utils/injectElements";
import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";

import '@scss/globals.scss';

// Centralized component mapping
const components = {
    "serve-sgv-card": <GetInvolvedCards id="serve-sgv-card" />,
    "partner-card": <GetInvolvedCards id="partner-card" />,
    "fire-relief-card": <GetInvolvedCards id="fire-relief-card" />,
    "give-card": <GetInvolvedCards id="give-card" />,
    "serve-card": <GetInvolvedCards id="serve-card" />,
    "pray-card": <GetInvolvedCards id="pray-card" />,
    "find-community-card": <GetInvolvedCards id="find-community-card" />,
    "prayer-request-card": <GetInvolvedCards id="prayer-request-card" />,
    "baptism-card": <GetInvolvedCards id="baptism-card" />,
    "subcribe-newsletter-card": <GetInvolvedCards id="subcribe-newsletter-card" />,
    "newcomer-connect-card": <GetInvolvedCards id="newcomer-connect-card" />,
};

// Inject only the cards when the page loads
document.addEventListener("DOMContentLoaded", () => injectElements(components));

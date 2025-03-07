import React from "react";
import ReactDOM from "react-dom";
import '@scss/globals.scss';

// import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";
//
// // Centralized component mapping
// const components = {
//     "serve-sgv-card": <GetInvolvedCards id="serve-sgv-card" />,
//     "partner-card": <GetInvolvedCards id="partner-card" />,
//     "fire-relief-card": <GetInvolvedCards id="fire-relief-card" />,
//     "give-card": <GetInvolvedCards id="give-card" />,
//     "serve-card": <GetInvolvedCards id="serve-card" />,
//     "pray-card": <GetInvolvedCards id="pray-card" />,
//     "find-community-card": <GetInvolvedCards id="find-community-card" />,
//     "prayer-request-card": <GetInvolvedCards id="prayer-request-card" />,
//     "baptism-card": <GetInvolvedCards id="baptism-card" />,
//     "subcribe-newsletter-card": <GetInvolvedCards id="subcribe-newsletter-card" />,
//     "newcomer-connect-card": <GetInvolvedCards id="newcomer-connect-card" />,
// };
//
// // Inject only the cards when the page loads
//
// const injectComponent = (Component, elementId) => {
//     const element = document.getElementById(elementId);
//     if (element) {
//         const root = ReactDOM.createRoot(element);
//         root.render(<Component />);
//     }
// };
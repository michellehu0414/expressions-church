// GetInvolvedCards
import React from "react";
import Card from "@components/Card/Card";

const cardData = {
    "partner-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "Image 1",
        headline: "Partner with us",
        bodyText: "Support our mission by partnering with us.",
        primaryButtonText: "Become a Partner",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true", // Defaults to internal
        showSecondaryButton: "true",
        secondaryButtonText: "Learn more",
        secondaryButtonLink: "/about",
    },
    "fire-relief-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/wildfire-red-night-sky.webp",
        altText: "Fire relief",
        headline: "Fire Relief",
        bodyText: "Families affected by the Los Angeles fires—including us—need immediate support. There are many ways you can help rebuild SGV.",
        primaryButtonText: "Donate",
        primaryButtonLink: "/firerelief",
        showSecondaryButton: "true",
        secondaryButtonText: "See how you can help",
        secondaryButtonLink: "/firerelief",
    },
    "give-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "Image 2",
        headline: "Give",
        bodyText: "We are a brand new church. Along with many families, we lost our building to the Eaton Fire. Help us rebuild and uplift SGV.",
        primaryButtonText: "Give now",
        primaryButtonLink: "/give",
        showSecondaryButton: "true",
        secondaryButtonText: "Read Our Story",
        secondaryButtonLink: "/about",
    },
    "find-community-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Find your Community",
        bodyText: "Our community groups and gatherings....",
        primaryButtonText: "Explore Community",
        primaryButtonLink: "/community",
        showSecondaryButton: "true",
        secondaryButtonText: "Sign Up",
    },
    "serve-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Serve with a Team",
        bodyText: "God has given all of us a gift from his great variety of spiritual gifts. Use them well to serve one another. We have 9 teams in total.",
        primaryButtonText: "Get started",
        primaryButtonLink: "/serve",
        secondaryButtonText: "Get Started",
    },
    "serve-sgv-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/three-fire-relief-volunteers-outdoor.webp",
        altText: "text",
        headline: "Serve SGV",
        bodyText: "Join our community efforts and support our SGV neighbors.",
        primaryButtonText: "Sign up now",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true",
        secondaryButtonText: "Learn more",
        secondaryButtonLink: "/serve-sgv",
    },
    "prayer-request-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Prayer Request",
        bodyText: "We’d love to pray for you. Share your request with us—you may choose to remain anonymous.",
        primaryButtonText: "Request Prayer",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true",
    },
    "baptism-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Get Baptized",
        bodyText: "We’d love to pray for you. Share your request with us—you may choose to remain anonymous.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true",
        secondaryButtonText: "Learn more",
        secondaryButtonLink: "/baptism",
    },
    "newcomer-connect-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Attend Newcomer Connect",
        bodyText: "Meet other newcomers and get to know us at our Newcomer Connect after Sunday service at a local coffee shop.",
        primaryButtonText: "Plan your visit",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true",
    },
    "subscribe-newsletter-card": {
        image: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
        altText: "text",
        headline: "Stay up to date",
        bodyText: "Subscribe to our newsletter to stay up to date with our latest news and events.",
        primaryButtonText: "Subscribe",
        primaryButtonLink: "www.example.com",
        primaryButtonExternal: "true",
    },
};

const GetInvolvedCards = ({ id }) => {
    if (!cardData[id]) return null; // If the ID is not found, return nothing
    return <Card {...cardData[id]} />;
};

export default GetInvolvedCards;
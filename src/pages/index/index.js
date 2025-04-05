import "./index.scss";
import "@src/main.js";

import { injectIntroSection } from "./sections/Intro";
import { serveTeamsData } from "@components/ServeTeams/ServeTeams";
import { injectSundayServiceSection } from "./sections/SundayService";
import { injectPlanYourVisitCTA } from "@components/PlanYourVisitCTA";


document.addEventListener("DOMContentLoaded", () => {
    // Get the container element where the accordions will be appended
    const container = document.getElementById("serve-teams-accordions");

    // Iterate over each item in the serveTeamsData array
    serveTeamsData.forEach(data => {
        // Create an accordion element for each data item
        const accordion = createAccordion(data);
        // Append the created accordion to the container
        container.appendChild(accordion);
    });

    // Inject the Sunday Service section
    injectIntroSection();
    injectSundayServiceSection();
    injectPlanYourVisitCTA();
});
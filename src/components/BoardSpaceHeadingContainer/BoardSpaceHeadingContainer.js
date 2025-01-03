// headingContainer.js
function createHeading(parentElementId, heading, paragraph) {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) {
        console.error("Parent element with id '" + parentElementId + "' not found.");
        return;
    }

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "left";
    container.style.width = "100%";
    container.style.maxWidth = "936px";
    container.style.margin = "auto";
    container.style.gap = "1.5rem";

    const headingElement = document.createElement("h2");
    headingElement.textContent = heading;
    container.appendChild(headingElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = paragraph;
    container.appendChild(paragraphElement);

    parentElement.appendChild(container);
}

// Example usage
createHeading(
    "exploringSolutionsHeader",
    "Exploring solutions with competitive research",
    "Next, we each took a day to explore existing tools, so we analyzed Survey Monkey, Google Forms, and Notion form integrations. Based on our design audit, we wanted to learn how these products streamline their user flow and structure their information architecture for a more intuitive and engaging experience. "
);

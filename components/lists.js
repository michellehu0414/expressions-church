// Export the fillList function
export function fillList(listId, items) {
    const list = document.getElementById(listId);
    if (list) {
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    } else {
        console.error("Element with id '" + listId + "' not found.");
    }
}

// Export the data arrays
export const boardspaceValueItems = [
    "Navigated the critical user flows",
    "Documented our errors and challenges encountered",
    "Mapped out the user flows"
];

export const designAuditListItems = [
    "Navigated the critical user flows",
    "Documented our errors and challenges encountered",
    "Mapped out the user flows"
];

export const designAuditPollsHomeItems = [
    "Indistinct navigation elements",
    "Unclear form validation requirements",
    "Limited customization",
    "Logic error in closing date (no time)"
];

export const designAuditVotingItems = [
    "No indication of exit route"
];

export const designAuditResultsItems = [
    "Lack of accommodation to user preferences"
];

export const designAuditConclusionItems = [
    "Poor visibility of system status",
    "Limited user control and freedom",
    "Limited visual aesthetic",
    "Inconsistent in design elements",
    "Lack of visual aesthetic design",
    "Insufficient error prevention measures",
    "Mismatch between the system and the real world",
];

export const exploringSolutionsItems = [
    "Simple user flow (maximum of 1 to 2 pages)",
    "Variety of answer options, question content, and survey settings",
    "Variety of data visualization",
    "Clean, minimal interface design",
    "Extensive and accessible help and documentation"
];

export const newDeliverablesItems = [
    "Redesign poll feature",
    "Usability test report of redesign",
    "Reiteration recommendations",
    "Presentation of the final report"
];

export const userflowObjectivesItems = [
    "Streamline processes",
    "Increase user control and flexibility",
    "Improve error prevention",
    "Boost competitive value"
];

export const sketchingObjectivesItems = [
    "Improve scannability and navigation",
    "Accommodate different user preferences",
    "Emphasize CTA to increase engagement",
    "Reduce cognitive load"
];

import "@scss/globals.scss";
import "@components/_global-components.scss";

import { createAccordion } from "@components/Accordion/Accordion";
import { injectPageHeader } from "@components/PageHeader/PageHeader";
import { createCard } from "@components/Card/Card";
import { cardData } from "@components/GetInvolvedCards/GetInvolvedCards";

// Call the function to render cards
document.addEventListener("DOMContentLoaded", () => {
	if (cardData) {
		Object.keys(cardData).forEach((cardId) => {
			const container = document.getElementById(cardId); // Find div with matching ID
			if (container) {
				// Clear the container to prevent duplicates
				container.innerHTML = "";

				const cardElement = createCard(cardData[cardId]); // Create card
				container.appendChild(cardElement); // Insert into div
			}
		});
	}

	createAccordion();
	// createCard();

	injectPageHeader();
	const header = document.querySelector(".page-header");

	// Function to toggle the data attributes
	function toggleButton(buttonName, value) {
		if (header) {
			header.setAttribute(`data-show-${buttonName}`, value);
		}
	}

	// Example usage
	toggleButton("primary-button", "false");
	toggleButton("secondary-button", "false");
	toggleButton("third-button", "true");
	toggleButton("fourth-button", "true");
});

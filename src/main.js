import "@components/_global-components.scss";
import "@scss/globals.scss"; // ✅ This ensures it loads globally

import { createCard } from "@components/Card/Card";
import { cardData } from "@components/GetInvolvedCards/GetInvolvedCards";

// Call the function to render cards
document.addEventListener("DOMContentLoaded", () => {
    if (cardData) {
        Object.keys(cardData).forEach(cardId => {
            const container = document.getElementById(cardId); // Find div with matching ID
            if (container) {
                const cardElement = createCard(cardData[cardId]); // Create card
                container.appendChild(cardElement); // Insert into div
            }
        });
    }

});
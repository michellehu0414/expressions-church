import "./Card.scss"; // ✅ Webpack handles SCSS
import "@components/Button/Button.scss";

export function createCard({
    image = "https://via.placeholder.com/300",
    altText = "Default image",
    headline = "Default Headline",
    bodyText = "Default body text.",
    primaryButtonText = "",
    primaryButtonLink = "#",
    secondaryButtonText = "",
    secondaryButtonLink = "#",
    showPrimaryButton = true,
    showSecondaryButton = false,
}) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img class="card-image" src="${image}" alt="${altText}" loading="lazy">
        <h3 class="card-headline">${headline}</h3>
        <p class="card-body">${bodyText}</p>
        <div class="buttons-wrapper"></div>
    `;

    const buttonsContainer = card.querySelector(".buttons-wrapper");

    if (showPrimaryButton && primaryButtonText) {
        const primaryBtn = document.createElement("a");
        primaryBtn.href = primaryButtonLink;
        primaryBtn.classList.add("btn-primary");
        primaryBtn.textContent = primaryButtonText;
        buttonsContainer.appendChild(primaryBtn);
    }

    if (showSecondaryButton && secondaryButtonText) {
        const secondaryBtn = document.createElement("a");
        secondaryBtn.href = secondaryButtonLink;
        secondaryBtn.classList.add("btn-secondary");
        secondaryBtn.textContent = secondaryButtonText;
        buttonsContainer.appendChild(secondaryBtn);
    }

    return card;
}
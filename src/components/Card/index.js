import "./Card.scss";

export const createCard = ({ imageSrc, altText, headline, bodyText, primaryButtonText, secondaryButtonText }) => {
  return `
        <img src="${imageSrc}" alt="${altText}" class="card-image">
        <div class="card-content">
          <h3 class="card-headline">${headline}</h3>
          <p class="card-body">${bodyText}</p>
          <div class="card-buttons">
            <button class="button primary">${primaryButtonText}</button>
            <button class="button secondary">${secondaryButtonText}</button>
          </div>
        </div>
    `;
};

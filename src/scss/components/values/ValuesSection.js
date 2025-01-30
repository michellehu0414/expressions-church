import './ValuesSection.scss';
import valuesData from './values-data.json';

export default function ValuesSection() {
    // Create container
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';

    // Create the item container
    const itemContainer = document.createElement('ul');
    itemContainer.className = 'item-container';

    // Populate items from data
    valuesData.forEach(({ title, description }) => {
        const card = document.createElement('li');
        card.className = 'value card';
        card.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
    `;
        itemContainer.appendChild(card);
    });

    // Append item container to scroll container
    scrollContainer.appendChild(itemContainer);

    return scrollContainer;
}

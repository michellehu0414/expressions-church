// Function to create a card with items
function createCard(
  iconName,
  iconSize,
  headline,
  content,
  containerSelector = '',
  backgroundColor = '#f9f9f9',
  contentVisible = true,
  alignCenter = false) {
  const cardContainer = document.querySelector(containerSelector);

  const cardElement = document.createElement('div');
  cardElement.className = 'projectBrief-grid-item';
  cardElement.style.backgroundColor = backgroundColor;
  cardElement.style.textAlign = alignCenter ? 'center' : 'left';

  const img = document.createElement('img');
  img.className = `icon--${iconSize}`;
  img.src = `/public/svg/${iconName}`;
  cardElement.appendChild(img);

  const p = document.createElement('p');
  p.style.display = contentVisible ? 'block' : 'none';

  const span = document.createElement('span');
  span.className = 'card_headline';
  span.style.display = 'block';
  span.style.marginBottom = 'none';
  span.textContent = headline;
  p.appendChild(span);

  p.appendChild(document.createTextNode(content));
  cardElement.appendChild(p);

  cardContainer.appendChild(cardElement);
  
}
// Initial project brief card content
createCard(
  'ic_goal.svg',
  'med',
  'Goal',
  'Gain insights to design a better product and enhance the customer experience.',
  '.cards-wrap'
);
createCard(
  'ic_task.svg',
  'med',
  'Objective',
  'Improve user engagement and retention rates through intuitive design.',
  '.cards-wrap'
);
import '../scss/home.scss';

import ValuesSection from '../scss/components/ValuesSection/ValuesSection';

const valuesSectionPlaceholder = document.querySelector('#values-section');

// Render the ValuesSection component
if (valuesSectionPlaceholder) {
  valuesSectionPlaceholder.appendChild(ValuesSection());
}


import Card from '../components/Card/Card';
const fireReliefContainer = document.querySelector('#fire-relief');
if (fireReliefContainer) {
  new Card(fireReliefContainer, {
    title: 'Fire Relief',
    description: 'Support those affected by the Eaton Fire and help us raise funds to rebuild our church.',
    imgSrc: 'fire-image.jpg',
    button1: { text: 'Donate', action: () => alert('Sign-up clicked') },
    button2: { text: 'See how you can help', action: () => alert('Learn more clicked') },
  });
}

const prayerContainer = document.querySelector('#prayer-request');
if (prayerContainer) {
  new Card(prayerContainer, {
    title: 'Prayer',
    description: 'We’d love to pray for you. Share your request with us, and you can choose to remain anonymous or include your name.',
    imgSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/prayer-01.webp',
    button1: { text: 'Submit prayer request', action: () => alert('Submit prayer request clicked') },
  });
}

const communityContainer = document.querySelector('#community-card');
if (communityContainer) {
  new Card(communityContainer, {
    title: 'Community',
    description: 'We’d love to pray for you. Share your request with us, and you can choose to remain anonymous or include your name.',
    imgSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
    button1: { text: 'Sign up', action: () => alert('Sign up clicked') },
    button2: { text: 'View schedule', action: () => alert('View schedule clicked') },
  });
}

import Tabs from '../components/Tabs/Tabs';

// Select all tab containers
const tabContainers = document.querySelectorAll('.tabs-container');

// Initialize the Tabs component for each container
tabContainers.forEach(container => {
  new Tabs(container);
});

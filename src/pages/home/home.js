import './home.scss';

// Import reusable components
import { renderIntro } from './sections/intro/intro';
import { renderCommunityGroupsGrid } from '../../components/communityGroupsGrid/communityGroupsGrid';
import { renderFireReliefSection } from '../../components/fireReliefSection/fireReliefSection';
import { renderValuesCards } from '../../components/valuesCards/valuesCards';
import { renderGetInvolvedCards } from '../../components/getInvolvedCards/getInvolvedCards';

// Function to render individual components into their containers
function renderHome() {
    const introContainer = document.getElementById('intro');
    if (introContainer) {
        introContainer.innerHTML = renderIntro();
    }

    const fireReliefContainer = document.getElementById('fire-relief-section');
    if (fireReliefContainer) {
        fireReliefContainer.innerHTML = renderFireReliefSection();
    }

    const communityGroupsGridContainer = document.getElementById('community-groups-grid');
    if (communityGroupsGridContainer) {
        communityGroupsGridContainer.innerHTML = renderCommunityGroupsGrid();
    }

    const getInvolvedCardsContainer = document.getElementById('get-involved-cards');
    if (getInvolvedCardsContainer) {
        getInvolvedCardsContainer.innerHTML = renderGetInvolvedCards();
    }

    const valuesCardsContainer = document.getElementById('values-cards');
    if (valuesCardsContainer) {
        valuesCardsContainer.innerHTML = renderValuesCards();
    }
}

// Or if I want to just order it here.
// Render the home page by injecting component HTML into a container

// export function renderHome() {
//     const container = document.getElementById('home-container');
//     if (container) {
//       container.innerHTML = `
//         ${renderFireReliefAnnouncementBar()}
//         ${renderFireReliefSection()}
//         ${renderFireReliefModal()}
//       `;
//     }
//   }

document.addEventListener('DOMContentLoaded', renderHome);




// import ValuesSection from '../scss/components/ValuesSection/ValuesSection';
//
// const valuesSectionPlaceholder = document.querySelector('#values-section');
//
// // Render the ValuesSection component
// if (valuesSectionPlaceholder) {
//   valuesSectionPlaceholder.appendChild(ValuesSection());
// }
//
//
// import Card from '../components/Card/Card';
// const fireReliefContainer = document.querySelector('#fire-relief');
// if (fireReliefContainer) {
//   new Card(fireReliefContainer, {
//     title: 'Fire Relief',
//     description: 'Support those affected by the Eaton Fire and help us raise funds to rebuild our church.',
//     imgSrc: 'fire-image.jpg',
//     button1: { text: 'Donate', action: () => alert('Sign-up clicked') },
//     button2: { text: 'See how you can help', action: () => alert('Learn more clicked') },
//   });
// }
//
// const prayerContainer = document.querySelector('#prayer-request');
// if (prayerContainer) {
//   new Card(prayerContainer, {
//     title: 'Prayer',
//     description: 'We’d love to pray for you. Share your request with us, and you can choose to remain anonymous or include your name.',
//     imgSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/prayer-01.webp',
//     button1: { text: 'Submit prayer request', action: () => alert('Submit prayer request clicked') },
//   });
// }
//
// const communityContainer = document.querySelector('#community-card');
// if (communityContainer) {
//   new Card(communityContainer, {
//     title: 'Community',
//     description: 'We’d love to pray for you. Share your request with us, and you can choose to remain anonymous or include your name.',
//     imgSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
//     button1: { text: 'Sign up', action: () => alert('Sign up clicked') },
//     button2: { text: 'View schedule', action: () => alert('View schedule clicked') },
//   });
// }
//
// import Tabs from '../components/Tabs/Tabs';
//
// // Select all tab containers
// const tabContainers = document.querySelectorAll('.tabs-container');
//
// // Initialize the Tabs component for each container
// tabContainers.forEach(container => {
//   new Tabs(container);
// });

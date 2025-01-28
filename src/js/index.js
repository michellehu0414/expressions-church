import '../scss/index.scss';

import Tabs from '../components/Tabs/Tabs';

// Select all tab containers
const tabContainers = document.querySelectorAll('.tabs-container');

// Initialize the Tabs component for each container
tabContainers.forEach(container => {
  new Tabs(container);
});

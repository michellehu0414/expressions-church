import './home.scss'; // ✅ Ensures styles are compiled
import '@js/main';
import '@components/globalComponents'; // ✅ Will always be compiled
import './sections/get-involved';

import { renderIntro } from './sections/intro';

document.addEventListener('DOMContentLoaded', () => {
    renderIntro(); // ✅ Render the intro section when the DOM is fully loaded
});

// ✅ Ensure Webpack sees these modules as necessary
if (document.readyState !== 'loading') {
    console.log("Home page scripts loaded");
}

import '../scss/main.scss';

// global.js
import { renderPageHeader } from '../components/pageHeader/pageHeader';
import { renderFireReliefSection } from '../components/fireReliefSection/fireReliefSection';

// Expose the components globally and initialize the header
function initPageHeader() {
    const headerContainer = document.getElementById('page-header-container');
    if (headerContainer) {
        // Read the data attributes from the header container element
        const backgroundImage = headerContainer.getAttribute('data-bg');
        const spanText = headerContainer.getAttribute('data-span-text');
        const headingText = headerContainer.getAttribute('data-heading-text');

        // Use the imported renderPageHeader function to generate the header HTML
        headerContainer.innerHTML = renderPageHeader({
            backgroundImage,
            spanText,
            headingText
        });
    } else {
        console.error('No header container found.');
    }
}

document.addEventListener('DOMContentLoaded', initPageHeader);

window.fireReliefSection = { renderFireReliefSection };

console.log('Global components loaded.');


// Function to dynamically load a component based on the page data attribute.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-content');
    if (!container) return;

    // Use a data attribute (e.g., data-page) to determine which component to load.
    const page = container.getAttribute('data-page'); // For example, "get-involved-grid"
    if (!page) return;

    // Dynamically import the corresponding module.
    import(`../pages/${page}/${page}.js`)
        .then(module => {
            container.innerHTML = module.render();
        })
        .catch(err => {
            console.error(`Error loading ${page} component:`, err);
        });
});


// Function to dynamically load its respective JavaScript file compiled by Webpack from the GitHub repository based on the page slug.
// For example, "home" will load the "home.js" file from main/assets/js.
document.addEventListener("DOMContentLoaded", function () {
    // Extract the page slug from the URL
    let pageSlug = window.location.pathname.split("/").filter(Boolean).pop() || "home"; // Default to "home"

    // Construct the JS file URL dynamically
    const scriptUrl = `https://raw.githubusercontent.com/michellehu0414/expressions-church/main/assets/js/${pageSlug}.js?v=${Date.now()}`;

    // Check if the script is already loaded
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.onerror = function () {
            console.error(`Failed to load script: ${scriptUrl}`);
        };
        document.body.appendChild(script);
    }
});


// Function to fetch an HTML file from the GitHub repository in ./html based on the provided targetId. It then injects the fetched HTML into the element.
// For example, <div id="home"></div> will fetch "home.html" from the GitHub repository and inject it into the element.
//  This allows automating the process of updating HTML content locally and not in the Elementor editor so that it can be version controlled and maintained more easily.
// If the element is not found, it logs a warning. If the fetch fails, it logs an error.
// Url is served using jsDelivr CDN URL.

const injectHTMLById = async (targetId) => {
    const fileName = `${targetId}.html`; // Construct the file name based on the ID
    const url = `
    https://cdn.jsdelivr.net/gh/michellehu0414/expressions-church@gh-elementor/assets/html/${fileName}`;

    try {
        const response = await fetch(url); // Fetch the HTML file
        if (response.ok) {
            const html = await response.text(); // Get the HTML content
            const targetElement = document.getElementById(targetId); // Find the target element by ID

            if (targetElement) {
                targetElement.innerHTML = html; // Inject HTML into the target element
            } else {
                console.warn(`Element with ID '${targetId}' not found.`);
            }
        } else {
            console.error(`Failed to fetch HTML for ${fileName}: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching HTML:', error);
    }
};

// Get all elements with an ID, and inject HTML for each one
const injectAllHTML = () => {
    const elements = document.querySelectorAll('[id]'); // Find all elements with an ID
    elements.forEach((element) => {
        injectHTMLById(element.id); // Call the inject function for each element's ID
    });
};

// Call the injectAllHTML function when the page loads
document.addEventListener('DOMContentLoaded', injectAllHTML);

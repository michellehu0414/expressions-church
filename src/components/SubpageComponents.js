// // global.js
// import { renderPageHeader } from './pageHeader/pageHeader';
//
// // Expose the components globally and initialize the header
// function initPageHeader() {
//     const headerContainer = document.getElementById('page-header-container');
//     if (headerContainer) {
//         // Read the data attributes from the header container element
//         const backgroundImage = headerContainer.getAttribute('data-bg');
//         const spanText = headerContainer.getAttribute('data-span-text');
//         const headingText = headerContainer.getAttribute('data-heading-text');
//
//         // Use the imported renderPageHeader function to generate the header HTML
//         headerContainer.innerHTML = renderPageHeader({
//             backgroundImage,
//             spanText,
//             headingText
//         });
//     } else {
//         console.error('No header container found.');
//     }
// }
//
// document.addEventListener('DOMContentLoaded', initPageHeader);
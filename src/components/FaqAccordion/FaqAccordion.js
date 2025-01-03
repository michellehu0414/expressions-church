// src/components/FaqAccordion/FaqAccordion.js

export function initializeFaqAccordion() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.accordionHeader').forEach(button => {
            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;
                const arrow = button.querySelector('.accordion-arrow');

                // Check if accordion is currently open
                if (button.classList.contains('active')) {
                    // It's open, so close it
                    accordionContent.style.maxHeight = '0'; // Ensure collapsing animation
                    arrow.style.transform = 'rotate(0deg)';
                    button.classList.remove('active'); // Remove the active class if content is being hidden
                } else {
                    // It's closed, so open it
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Set maxHeight to the scrollHeight for expanding animation
                    arrow.style.transform = 'rotate(-180deg)';
                    button.classList.add('active'); // Add the active class if content is being shown
                }
            });
        });
    });
}
import './_ScrollToSection.scss';

export default function ScrollToSection() {
    console.log('ScrollToSection initialized');

    // Function to initialize the scroll behavior
    const initializeScroll = () => {
        // Find all buttons with the data-scroll-target attribute
        const scrollButtons = document.querySelectorAll('[data-scroll-target]');

        // Iterate through each scroll button and add the event listener
        scrollButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Get the target id from the button's data-scroll-target attribute
                const targetId = button.getAttribute('data-scroll-target');
                const target = document.getElementById(targetId);

                if (!target) {
                    console.warn(`Target section with ID "${targetId}" not found.`);
                    return;
                }

                // Get the offset from data-offset attribute or default to 0
                const offsetAttr = button.getAttribute('data-offset');
                const offset = offsetAttr ? parseInt(offsetAttr, 10) : 0;

                // Calculate the target position relative to the top of the page
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                // Smooth scroll to the target section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            });
        });
    };

    // Initialize scroll behavior immediately
    initializeScroll();

    // Add a MutationObserver to watch for dynamically inserted elements
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Reinitialize the scroll behavior whenever new elements are added to the DOM
                initializeScroll();
            }
        }
    });

    // Observe the entire document for changes (new elements being added)
    observer.observe(document.body, { childList: true, subtree: true });
}

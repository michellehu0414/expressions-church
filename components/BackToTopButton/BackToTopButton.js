function BackToTopButton() {
    const button = document.createElement('button');
    button.className = 'btn-back-to-top';
    button.innerHTML = `
      <svg class="btn-back-to-top-svg" xmlns="http://www.w3.org/2000/svg" width="56" height="57"
        viewBox="0 0 56 57" fill="none">
        <path d="M39 34L28 23L17 34" stroke-width="3" />
      </svg>
      <p class="btn-back-to-top-label">Back to top</p>
    `;
    document.body.appendChild(button);

    let lastScrollTop = 0;  // Track last scroll position to detect scroll direction
    let hoverEffectApplied = false;  // Track if hover effect is applied
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // Detect if user is scrolling down
        const isScrollingDown = scrollTop > lastScrollTop;

        // Update last scroll position
        lastScrollTop = scrollTop;

        // Show the button after scrolling 100px
        if (scrollTop > clientHeight * 0.5) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }

        // Apply hover effect only when user is scrolling down and in the range between 50vh and 175vh
        if (isScrollingDown && scrollTop > clientHeight * 0.5 && scrollTop < clientHeight * 1.75) {
            if (!hoverEffectApplied) {
                button.classList.add('hover-effect');  // Trigger hover effect between 50vh and 175vh
                hoverEffectApplied = true;  // Mark hover effect as applied
            }
        } else {
            if (hoverEffectApplied) {
                button.classList.remove('hover-effect');  // Remove hover effect if out of range or scrolling up
                hoverEffectApplied = false;
            }
        }

        // Check if the user has reached the bottom of the page
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            button.classList.add('hover-effect');
        } else if (!isScrollingDown && scrollTop + clientHeight < scrollHeight - 100) {
            button.classList.remove('hover-effect');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

export default BackToTopButton;
import './_LoadingScreen.scss';

export default function initLoadingAnimation() {
    // Remove any existing loading screen
    const existingLoadingScreen = document.getElementById('loading-screen');
    if (existingLoadingScreen) {
        existingLoadingScreen.remove();
    }

    // Create a new loading screen element
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `<p id="loading-text">0%</p>`;
    document.body.appendChild(loadingScreen);

    const loadingText = document.getElementById('loading-text');
    let percentage = 0;

    if (!loadingText) {
        console.error('Loading text element not found');
        return;
    }

    // Hide <nav>, <main>, and <footer> elements initially
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (nav) nav.style.display = 'none';
    if (main) main.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Start the loading percentage update
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            loadingText.textContent = `${percentage}%`;

            // Gradually increase the opacity of the text from 0.1 to 1
            const opacity = 0.1 + (percentage / 100) * 0.9;
            loadingText.style.opacity = opacity;
        } else {
            clearInterval(interval);

            // Set the text to 100% opacity and pause for 2 seconds
            loadingText.textContent = '100%';
            loadingText.style.opacity = '1';

            setTimeout(() => {
                // Start dissolving the loading screen (fade out over 1 second)
                loadingScreen.classList.add('dissolve');

                // Wait for the dissolve effect to complete
                setTimeout(() => {
                    loadingScreen.remove();
                    // Show <nav>, <main>, and <footer> elements
                    if (nav) nav.style.display = 'flex';
                    if (main) main.style.display = 'block';
                    if (footer) footer.style.display = 'block';
                }, 1000); // 1 second dissolve effect
            }, 1000); // Pause for 2 seconds at 100%
        }
    }, 30);
}

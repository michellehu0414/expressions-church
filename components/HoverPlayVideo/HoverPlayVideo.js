document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectMedia = card.querySelector('.project-thumb');

        card.addEventListener('mouseenter', () => {
            projectMedia.currentTime = 0; // Reset the video to the beginning
            projectMedia.play(); // Play the video
        });

        card.addEventListener('mouseleave', () => {
            projectMedia.pause(); // Pause the video
            projectMedia.currentTime = 0; // Reset the video to the beginning
        });
    });
});

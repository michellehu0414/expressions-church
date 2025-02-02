document.addEventListener('DOMContentLoaded', (event) => {
    const videoSets = document.querySelectorAll('.sequential-video-set-3');

    videoSets.forEach((set, index) => {
        const video1 = set.querySelector('video:nth-child(1)');
        const video2 = set.querySelector('video:nth-child(2)');
        const video3 = set.querySelector('video:nth-child(3)');

        // Intersection Observer callback
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video1.play();
                    observer.unobserve(video1);
                }
            });
        };

        // Intersection Observer options
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust threshold as needed
        };

        // Create Intersection Observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe the first video
        observer.observe(video1);

        // Event listener for video1 ending
        video1.addEventListener('ended', () => {
            video2.play();
        });

        // Event listener for video2 ending to restart video1
        video2.addEventListener('ended', () => {
            video3.play();
        });

        // Event listener for video2 ending to restart video1
        video3.addEventListener('ended', () => {
            video1.play();
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const videoSets = document.querySelectorAll('.sequential-video-set-2');

    videoSets.forEach((set, index) => {
        const video1 = set.querySelector('video:nth-child(1)');
        const video2 = set.querySelector('video:nth-child(2)');

        // Intersection Observer callback
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video1.play();
                    observer.unobserve(video1);
                }
            });
        };

        // Intersection Observer options
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust threshold as needed
        };

        // Create Intersection Observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe the first video
        observer.observe(video1);

        // Event listener for video1 ending
        video1.addEventListener('ended', () => {
            video2.play();
        });

        // Event listener for video2 ending to restart video1
        video2.addEventListener('ended', () => {
            video1.play();
        });
    });
});

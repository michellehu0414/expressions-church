import './ProjectProgressBar.scss';

function ProgressBar() {
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const progressBar = document.querySelector('.progress-bar');

    // Initially hide the progress-bar-container
    progressBarContainer.style.display = 'none';

    document.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        // Show the progress-bar-container when scrolling
        progressBarContainer.style.display = 'block';
        progressBar.style.width = scrollPercent + '%';

        // Optionally, hide the progress-bar-container when at the top of the page
        if (scrollTop === 0) {
            progressBarContainer.style.display = 'none';
        }
    });
}

export default ProgressBar;

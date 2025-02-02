class AutoplayVideoCarousel {
    constructor(selector) {
        this.carouselElement = document.querySelector(selector);
        this.initializeSelectors();
        this.initializeState();
        this.init();
    }

    initializeSelectors() {
        this.selectors = {
            track: '.track',
            container: '.carouselContainer',
            slides: '.slide',
            dots: '.dot',
            playPauseButton: '.playPauseButton',
            resetButton: '.resetButton',
            playIcon: '.imgPlayButton',
            pauseIcon: '.imgPauseButton'
        };
    }

    initializeState() {
        this.state = {
            currentIndex: 0,
            isDragging: false,
            isPlaying: true,
            startX: 0,
            endX: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationID: 0
        };
    }

    init() {
        this.initializeCarouselElement();
        this.setupVisibilityChange();
        this.setupIntersectionObserver();
    }

    initializeCarouselElement() {
        this.carouselElement = this.carouselElement || {};
        this.carouselElement.carouselTrack = this.carouselElement.querySelector(this.selectors.track);
        this.carouselElement.carouselSlides = this.carouselElement.querySelectorAll(this.selectors.slides);
        this.carouselElement.carouselContainer = this.carouselElement.querySelectorAll(this.selectors.carouselContainer);
        this.carouselElement.dots = this.carouselElement.querySelectorAll(this.selectors.dots);
        this.carouselElement.playPauseButton = this.carouselElement.querySelector(this.selectors.playPauseButton);
        this.carouselElement.resetButton = this.carouselElement.querySelector(this.selectors.resetButton);

        this.carouselElement.playIcon = this.carouselElement.playPauseButton.querySelector(this.selectors.playIcon);
        this.carouselElement.pauseIcon = this.carouselElement.playPauseButton.querySelector(this.selectors.pauseIcon);

        this.setupEventListeners();
        this.updateCarousel();
        this.playCurrentVideo();
        this.setupVideoProgressListener();
    }

    setupVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseCurrentVideo();
            } else {
                this.playVideoIfInView();
            }
        });
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            threshold: 0.5,
        };
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.playCurrentVideo();
                } else {
                    this.pauseCurrentVideo();
                }
            });
        }, options).observe(this.carouselElement);
    }

    playVideoIfInView() {
        const video = this.getCurrentVideo();
        if (video && !video.paused) {
            this.playCurrentVideo();
        }
    }

    pauseCurrentVideo() {
        const video = this.getCurrentVideo();
        if (video && !video.paused) {
            video.pause();
            this.updatePlayPauseButtonState(false);
        }
    }

    getCurrentVideo() {
        return this.carouselElement.carouselSlides[this.state.currentIndex].querySelector('video');
    }

    setupEventListeners() {
        const handleStart = (event) => this.handleDragStart(event);
        const handleMove = (event) => this.handleDragMove(event);
        const handleEnd = () => {
            this.handleDragEnd();
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
        };

        ['touchstart', 'mousedown'].forEach(event => {
            this.carouselElement.carouselTrack.addEventListener(event, (event) => {
                handleStart(event);
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseup', handleEnd);
            });
        });

        ['touchmove'].forEach(event => {
            this.carouselElement.carouselTrack.addEventListener(event, handleMove);
        });

        ['touchend', 'mouseleave'].forEach(event => {
            this.carouselElement.carouselTrack.addEventListener(event, handleEnd);
        });

        this.carouselElement.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.handleDotClick(index));
        });

        this.carouselElement.playPauseButton.addEventListener('click', () => this.playPauseVideos());
        this.carouselElement.resetButton.addEventListener('click', () => this.resetCarousel());
        this.carouselElement.carouselSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => this.handleSlideClick(slide, index));
        });

        // Removed the slide click event listener for toggling video play state
    }

    handleDragStart(event) {
        this.state.isDragging = true;
        this.state.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        this.state.animationID = requestAnimationFrame(this.animation.bind(this));
        this.carouselElement.carouselTrack.classList.add('grabbing');
    }

    handleDragMove(event) {
        if (!this.state.isDragging) return;
        this.state.endX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        const currentPosition = this.state.endX - this.state.startX;
        this.state.currentTranslate = this.state.prevTranslate + currentPosition;
    }

    handleDragEnd() {
        this.state.isDragging = false;
        cancelAnimationFrame(this.state.animationID);
        this.carouselElement.carouselTrack.classList.remove('grabbing');
        this.updateSlidePositionByDrag();
    }

    updateSlidePositionByDrag() {
        const movedBy = this.state.currentTranslate - this.state.prevTranslate;
        if (movedBy < -100 && this.state.currentIndex < this.carouselElement.carouselSlides.length - 1) this.state.currentIndex += 1;
        if (movedBy > 100 && this.state.currentIndex > 0) this.state.currentIndex -= 1;
        this.updateCarousel();
        this.playCurrentVideo();
    }

    handleDotClick(index) {
        this.state.currentIndex = index;
        this.updateCarousel();
        this.playCurrentVideo();
    }

    /**
     * Toggles the play state of the video.
     * @param {HTMLVideoElement} video - The video element to toggle the play state for.
     */
    toggleVideoPlayState(video) {
        // Toggle the play state based on the current isPlaying state
        if (this.state.isPlaying) {
            video.pause();
            this.updatePlayPauseButtonState(false); // Update button to show play icon
        } else {
            video.play();
            this.updatePlayPauseButtonState(true); // Update button to show pause icon
        }
        // Toggle the isPlaying state to reflect the change
        this.state.isPlaying = !this.state.isPlaying;
    }

    /**
     * Updates the state of the play/pause button based on the provided `isPlaying` value.
     * @param {boolean} isPlaying - Indicates whether the video is currently playing or not.
     */
    updatePlayPauseButtonState(isPlaying) {
        this.state.isPlaying = isPlaying;
        if (isPlaying) {
            this.carouselElement.playPauseButton.classList.add('paused');
            this.carouselElement.playIcon.style.display = 'none';
            this.carouselElement.pauseIcon.style.display = 'inline';
        } else {
            this.carouselElement.playPauseButton.classList.remove('paused');
            this.carouselElement.playIcon.style.display = 'inline';
            this.carouselElement.pauseIcon.style.display = 'none';
        }
    }

    setupVideoProgressListener() {
        const updateProgress = () => {
            const video = this.carouselElement.carouselSlides[this.state.currentIndex].querySelector('video');
            const activeDot = this.carouselElement.dots[this.state.currentIndex];
            const progressBar = activeDot.querySelector('.progressBar');

            let animationFrameId;

            const updateBar = () => {
                if (!video.paused && !video.ended) {
                    const progress = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = `${progress}%`;
                    animationFrameId = requestAnimationFrame(updateBar);
                }
            };

            if (video && progressBar) {
                video.addEventListener('play', () => {
                    animationFrameId = requestAnimationFrame(updateBar);
                });

                video.addEventListener('pause', () => {
                    cancelAnimationFrame(animationFrameId);
                    const progress = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = `${progress}%`;
                });

                video.addEventListener('ended', () => {
                    cancelAnimationFrame(animationFrameId);
                    // progressBar.style.width = '0%'; // Optionally reset progress bar
                });

                video.addEventListener('timeupdate', () => {
                    if (video.paused || video.ended) {
                        const progress = (video.currentTime / video.duration) * 100;
                        progressBar.style.width = `${progress}%`;
                    }
                });
            }
        };

        updateProgress();

        this.carouselElement.dots.forEach(dot => {
            dot.addEventListener('click', updateProgress);
        });
    }

    getSlideWidth() {
        const slide = this.carouselElement.carouselSlides[0];
        return parseFloat(getComputedStyle(slide).width) + parseFloat(getComputedStyle(slide).marginRight);
    }

    setSliderPosition() {
        this.carouselElement.carouselTrack.style.transform = `translateX(${this.state.currentTranslate}px)`;
    }

    animation() {
        this.setSliderPosition();
        if (this.state.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    updateCarousel() {
        const slideWidth = this.getSlideWidth();
        this.state.prevTranslate = -this.state.currentIndex * slideWidth;
        this.state.currentTranslate = this.state.prevTranslate;
        this.setSliderPosition();
        // Ensure dots are initialized and not empty
        if (this.carouselElement.dots && this.carouselElement.dots.length > 0) {
            this.carouselElement.dots.forEach(dot => dot.classList.remove('active'));
            // Safely access classList for the active dot
            if (this.carouselElement.dots[this.state.currentIndex]) {
                this.carouselElement.dots[this.state.currentIndex].classList.add('active');
            }
        }
        this.setupVideoProgressListener();
    }

    playCurrentVideo() {
        this.carouselElement.carouselSlides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                video.removeEventListener('ended', this.handleVideoEnd.bind(this));
                if (index === this.state.currentIndex) {
                    if (this.state.isPlaying) {
                        video.play();
                        video.addEventListener('ended', this.handleVideoEnd.bind(this));
                        this.updatePlayPauseButtonState(true);
                    }
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }

    playPauseVideos() {
        const video = this.carouselElement.carouselSlides[this.state.currentIndex].querySelector('video');
        if (video) {
            if (this.state.isPlaying) {
                video.pause();
                this.carouselElement.playPauseButton.classList.add('paused');
                this.carouselElement.playIcon.style.display = 'inline';
                this.carouselElement.pauseIcon.style.display = 'none';
            } else {
                video.play();
                this.carouselElement.playPauseButton.classList.remove('paused');
                this.carouselElement.playIcon.style.display = 'none';
                this.carouselElement.pauseIcon.style.display = 'inline';
            }
            this.state.isPlaying = !this.state.isPlaying;
        }
    }

    /**
 * Handles the click event on a slide in the carousel.
 *
 * @param {HTMLElement} slide - The slide element that was clicked.
 * @param {number} index - The index of the clicked slide.
 */
    handleSlideClick() {
        const video = this.carouselElement.carouselSlides[this.state.currentIndex].querySelector('video');
        if (video) {
            if (this.state.isPlaying) {
                video.pause();
                this.carouselElement.playPauseButton.classList.add('paused');
                this.carouselElement.playIcon.style.display = 'inline';
                this.carouselElement.pauseIcon.style.display = 'none';
            } else {
                video.play();
                this.carouselElement.playPauseButton.classList.remove('paused');
                this.carouselElement.playIcon.style.display = 'none';
                this.carouselElement.pauseIcon.style.display = 'inline';
            }
            this.state.isPlaying = !this.state.isPlaying;
            this.toggleVideoPlayState(video);
        }
    }

    handleVideoEnd() {
        if (this.state.currentIndex < this.carouselElement.carouselSlides.length - 1) {
            setTimeout(() => {
                this.state.currentIndex += 1;
                this.updateCarousel();
                this.playCurrentVideo();
            }, 1000); // Wait for 1000ms before moving to the next slide
        } else {
            this.resetCarousel();
        }
    }

    resetCarousel() {
        this.state.currentIndex = 0;
        this.state.isPlaying = true;
        this.updateCarousel();
        const firstSlideVideo = this.carouselElement.carouselSlides[0].querySelector('video');
        if (firstSlideVideo) {
            firstSlideVideo.currentTime = 0;
            firstSlideVideo.play();
        }
        this.carouselElement.playPauseButton.classList.remove('paused');
        this.carouselElement.playIcon.style.display = 'none';
        this.carouselElement.pauseIcon.style.display = 'inline';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AutoplayVideoCarousel('#carousel1');
    new AutoplayVideoCarousel('#carousel2');
});

// import { AutoplayVideoCarousel } from '../components/AutoplayVideoCarousel/AutoplayVideoCarousel';
//
// // Initialize multiple carousels
// document.addEventListener('DOMContentLoaded', () => {
//     new AutoplayVideoCarousel('#carousel1');
//     new AutoplayVideoCarousel('#carousel2');
// });
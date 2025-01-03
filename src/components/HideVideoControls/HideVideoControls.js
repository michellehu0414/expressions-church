export function initializeHideVideoControls() {
    const container = document.querySelector('main'); // or a more specific parent element

    container.addEventListener('mouseenter', function (event) {
        if (event.target.tagName === 'VIDEO' && event.target.id !== 'exclude-video-jquery') {
            event.target.setAttribute("controls", "controls");
        }
    }, true);

    container.addEventListener('mouseleave', function (event) {
        if (event.target.tagName === 'VIDEO' && event.target.id !== 'exclude-video-jquery') {
            event.target.removeAttribute("controls");
        }
    }, true);
}

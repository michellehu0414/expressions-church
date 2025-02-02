import './_ImageZoom.scss';  // Import the CSS for zoom functionality

export default function enableImageZoom() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.img-zoomable').forEach(image => {
            image.addEventListener('click', () => {
                // Toggle the 'img-zoomed' class on click
                image.classList.toggle('img-zoomed');
            });
        });
    });
}

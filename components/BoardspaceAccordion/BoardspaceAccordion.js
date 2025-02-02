export function initializeBoardspaceAccordion() {
    document.querySelectorAll('.accordionHeader').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');
            const isActive = button.classList.toggle('active');

            accordionContent.style.maxHeight = isActive ? accordionContent.scrollHeight + "px" : '0';
            arrow.style.transform = isActive ? 'rotate(-180deg)' : 'rotate(0deg)';
        });
    });
}

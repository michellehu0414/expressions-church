// ProjectAccordion.js
function toggleAccordion(header) {
  const accordion = header.parentElement;
  const content = accordion.querySelector('.accordion__content');
  const icon = header.querySelector('.accordion__icon');

  content.classList.toggle('active');
  icon.classList.toggle('rotate');

  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
}

function initializeAccordion() {
  document.querySelectorAll('.accordion').forEach(accordion => {
    const header = accordion.querySelector('.accordion__header');
    header.addEventListener('click', function () {
      toggleAccordion(this);
    });
  });
}

export { toggleAccordion, initializeAccordion };
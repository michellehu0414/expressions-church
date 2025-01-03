document.addEventListener('DOMContentLoaded', function () {
  const scrollButtons = document.querySelectorAll('.scroll-button');

  scrollButtons.forEach(button => {
      button.addEventListener('click', function () {
          const targetId = button.getAttribute('data-scroll-target');
          const nextSection = document.getElementById(targetId);
          if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.error(`Element with ID "${targetId}" not found`);
          }
      });
  });
});

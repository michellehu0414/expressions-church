var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".hmuSwiper", {
  effect: "cards",
  grabCursor: true,
});

var swiper = new Swiper(".hmuSwiper", {
  effect: "cards",
  grabCursor: true,
  loop: false // Ensure loop is false for proper direction handling
});

document.getElementById('resetSwiper').addEventListener('click', function () {
  swiper.slideTo(0, swiper.params.speed, true); // Use the default speed and enable a runCallback if needed
});
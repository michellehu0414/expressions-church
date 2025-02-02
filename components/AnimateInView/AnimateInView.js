import 'intersection-observer'; // Polyfill for older browsers
import "./AnimateInView.scss";

export function AnimateInView({ classAnimationMap, threshold = 0.1, rootMargin = '0px' } = {}) {
  // Gather all elements based on classes from the map
  const elements = Object.keys(classAnimationMap)
    .flatMap(cls => Array.from(document.querySelectorAll(`.${cls}`)));

  // Add the initial 'pre-animation' class to hide elements before they enter the viewport
  elements.forEach(element => element.classList.add('pre-animation'));

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find the matching class and corresponding animation
        const targetClass = Object.keys(classAnimationMap).find(cls => entry.target.classList.contains(cls));
        const animationClass = classAnimationMap[targetClass];

        if (animationClass) {
          // Add Animate.css classes and remove the 'pre-animation' class to trigger fade-in
          entry.target.classList.remove('pre-animation');
          entry.target.classList.add('animate__animated', animationClass);

          observer.unobserve(entry.target); // Stop observing after the animation triggers
        }
      }
    });
  }, { threshold, rootMargin });

  // Observe each element
  elements.forEach(element => observer.observe(element));
}

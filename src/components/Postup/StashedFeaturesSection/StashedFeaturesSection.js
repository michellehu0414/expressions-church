// import "./StashedFeaturesSection.scss"; // Import any relevant styles
//
// import seatingIcon from '../../../assets/svg/postup/stashed-feature-seating.svg';
// import reservationIcon from '../../../assets/svg/postup/stashed-feature-reservation.svg';
// import searchBarIcon from '../../../assets/svg/postup/stashed-feature-search-bar.svg';
// import graphIcon from '../../../assets/svg/postup/stashed-feature-graph.svg';
//
// let isStashedFeaturesSectionInitialized = false;
//
// function initializeStashedFeaturesSection() {
//   if (isStashedFeaturesSectionInitialized) return;
//
//   const sectionHTML = `
//     <div class="wrapper">
//         <ul class="grid-container">
//             <li class="card">
//                 <div class="card-wrapper">
//                     <div class="icon-wrapper">
//                         <img src="${seatingIcon}" alt="Seating availability icon" class="icon">
//                     </div>
//                     <div class="copy-wrapper">
//                         <p class="heading">Seating availability</p>
//                         <p class="body">This was mentioned by one interviewee...</p>
//                     </div>
//                 </div>
//             </li>
//             <li class="card">
//                 <div class="card-wrapper">
//                     <div class="icon-wrapper">
//                         <img src="${reservationIcon}" alt="Reservation system icon" class="icon">
//                     </div>
//                     <div class="copy-wrapper">
//                         <p class="heading">Reservation system</p>
//                         <p class="body">This has great potential but its rarity...</p>
//                     </div>
//                 </div>
//             </li>
//             <li class="card">
//                 <div class="card-wrapper">
//                     <div class="icon-wrapper">
//                         <img src="${searchBarIcon}" alt="Search bar icon" class="icon">
//                     </div>
//                     <div class="copy-wrapper">
//                         <p class="heading">Home search bar</p>
//                         <p class="body">As a common user route, I anticipated...</p>
//                     </div>
//                 </div>
//             </li>
//             <li class="card last-child">
//                 <div class="card-wrapper">
//                     <div class="icon-wrapper">
//                         <img src="${graphIcon}" alt="Graph icon" class="icon">
//                     </div>
//                     <div class="copy-wrapper">
//                         <p class="heading">Popular times</p>
//                         <p class="body">Given its popularity in other apps, it could enhance...</p>
//                     </div>
//                 </div>
//             </li>
//         </ul>
//     </div>
//             <div class="content-wrapper mv-0">
//           <ul class="carousel-nav-arrows_wrapper list-transform-none">
//             <li>
//               <button aria-label="Previous" class="carousel-nav-arrow" id="prevButton">
//                 <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 36 36">
//                   <path
//                     d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z">
//                   </path>
//                 </svg>
//               </button>
//             </li>
//             <li>
//               <button aria-label="Next" class="carousel-nav-arrow" id="nextButton">
//                 <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 36 36">
//                   <path
//                     d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z">
//                   </path>
//                 </svg>
//               </button>
//             </li>
//           </ul>
//         </div>
//     `;
//
//   const targetElement = document.getElementById("stashed-features-section");
//
//   if (targetElement) {
//     targetElement.insertAdjacentHTML("beforeend", sectionHTML);
//   } else {
//     console.error("Target element not found");
//     return;
//   }
//
//   // Initialize scrolling functionality
//   const container = document.querySelector('.wrapper');
//   const cards = document.querySelectorAll('.card');
//   let cardWidth = cards[0].offsetWidth;
//   let currentIndex = 0;
//
//   container.addEventListener('wheel', function (event) {
//     event.preventDefault();
//     if (event.deltaY > 0) {
//       // Scroll right
//       currentIndex = Math.min(currentIndex + 1, cards.length - 1);
//     } else {
//       // Scroll left
//       currentIndex = Math.max(currentIndex - 1, 0);
//     }
//     container.scrollTo({
//       left: cardWidth * currentIndex,
//       behavior: 'smooth'
//     });
//   });
//
//   isStashedFeaturesSectionInitialized = true;
// }
//
// function StashedFeaturesSection() {
//   initializeStashedFeaturesSection();
// }
//
// export default StashedFeaturesSection;

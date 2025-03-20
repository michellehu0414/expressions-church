import './PageHeader.scss';
//
// function createPageHeaders() {
//     document.querySelectorAll(".page-header").forEach((banner) => {
//         // Get settings from data attributes (set in HTML)
//         const backgroundImage = banner.dataset.bgImage || "";
//         const titleOutlinedText = banner.dataset.titleOutlined || "";
//         const titleFilledText = banner.dataset.titleFilled || "";
//         const primaryButtonText = banner.dataset.primaryBtnText || "";
//         const primaryButtonLink = banner.dataset.primaryBtnLink || "#";
//         const secondaryButtonText = banner.dataset.secondaryBtnText || "";
//         const secondaryButtonLink = banner.dataset.secondaryBtnLink || "#";
//         const showPrimaryButton = banner.dataset.showPrimaryBtn !== "false"; // Defaults to true
//         const showSecondaryButton = banner.dataset.showSecondaryBtn === "true"; // Defaults to false
//
//         // Apply background image
//         banner.style.background = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
//                                  url('${backgroundImage}') no-repeat center bottom / cover`;
//
//         // Create title
//         const title = document.createElement("h1");
//         title.className = "page-header-title";
//
//         const outlinedText = document.createElement("span");
//         outlinedText.className = "outlined";
//         outlinedText.textContent = titleOutlinedText;
//
//         title.appendChild(outlinedText);
//         title.append(` ${titleFilledText}`);
//
//         // Create button container
//         const buttonsContainer = document.createElement("div");
//         buttonsContainer.className = "page-header-buttons";
//
//         // Primary button
//         if (showPrimaryButton && primaryButtonText) {
//             const primaryButton = document.createElement("a");
//             primaryButton.href = primaryButtonLink;
//             primaryButton.className = "btn-primarybgBlack";
//             primaryButton.textContent = primaryButtonText;
//             buttonsContainer.appendChild(primaryButton);
//         }
//
//         // Secondary button
//         if (showSecondaryButton && secondaryButtonText) {
//             const secondaryButton = document.createElement("a");
//             secondaryButton.href = secondaryButtonLink;
//             secondaryButton.className = "secondary btn-bg-white";
//             secondaryButton.textContent = secondaryButtonText;
//             buttonsContainer.appendChild(secondaryButton);
//         }
//
//         // Append elements to the banner
//         banner.appendChild(title);
//         banner.appendChild(buttonsContainer);
//     });
// }
//
// // Run script when DOM is loaded
// document.addEventListener("DOMContentLoaded", createPageHeaders);

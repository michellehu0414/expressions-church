// src/components/pageHeader/pageHeader.js
import './pageHeader.scss';

export function renderPageHeader({
    backgroundImage = 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/expressions-exterior-expanded-scaled.webp',
    spanText = 'our',
    headingText = 'leadership'
} = {}) {
    const inlineStyle = `background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('${backgroundImage}') no-repeat center bottom / cover;`;
    return `
    <header class="page-header" style="${inlineStyle}">
      <div class="wrapper">
        <h1><span class="outlined">${spanText}</span> ${headingText}</h1>
      </div>
    </header>
  `;
}

// Usage
{/* <header id="page-header-container"
        data-bg="https://example.com/path-to-your-custom-image.jpg"
        data-span-text="Welcome to"
        data-heading-text="Our Site">
</header> */}
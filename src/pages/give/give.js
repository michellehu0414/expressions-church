import './give.scss';

// Import global styles (if not already included globally)
import '../../scss/main.scss';

// Import give page specific styles
import './give.scss';

// Import reusable components
import { renderFireReliefSection } from '../../components/fireReliefSection/fireReliefSection';

// Function to render individual components into their containers
function renderGive() {
    // Inject Fire Relief Section if its container exists
    const fireReliefContainer = document.getElementById('fire-relief-section');
    if (fireReliefContainer) {
        fireReliefContainer.innerHTML = renderFireReliefSection();
    }

    // Inject Values Cards if its container exists
    const valuesCardsContainer = document.getElementById('values-cards');
    if (valuesCardsContainer) {
        valuesCardsContainer.innerHTML = renderValuesCards();
    }
}

// Wait for the DOM to be ready before rendering
document.addEventListener('DOMContentLoaded', renderGive);
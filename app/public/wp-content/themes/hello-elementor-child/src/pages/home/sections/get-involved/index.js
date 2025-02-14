import { insertGetInvolvedCards } from '@components/GetInvolvedCards';

document.addEventListener('DOMContentLoaded', insertGetInvolvedCards);

document.getElementById("content").innerHTML = `
<section id="new-section">
    <h2>Dynamic Section</h2>
    <p>This section was added using JavaScript!</p>
</section>
`;

// Usage - Importing the file
// import './src/templates/innerHTML/innerHTML.js';
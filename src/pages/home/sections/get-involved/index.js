import { insertGetInvolvedCards } from '@components/GetInvolvedCards';

document.addEventListener('DOMContentLoaded', insertGetInvolvedCards);

document.getElementById("get-involved").innerHTML = `
<div>
    <div id="partner-card"></div>
    <div id="fire-relief-card"></div>
    <div id="give-card"></div>
    <div id="find-community-card"></div>
    <div id="serve-card"></div>
    <div id="serve-sgv-card"></div>
    </div>
`;

// Usage - Importing the file
// import './src/templates/innerHTML/innerHTML.js';
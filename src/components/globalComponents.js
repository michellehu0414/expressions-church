import './Button';
import './Card';

import { insertGetInvolvedCards } from './GetInvolvedCards';

document.addEventListener('DOMContentLoaded', insertGetInvolvedCards);

document.getElementById("get-involved").innerHTML = `
    <div id="partner-card" class="card"></div>
    <div id="fire-relief-card" class="card"></div>
    <div id="give-card" class="card"></div>
    <div id="find-community-card" class="card"></div>
    <div id="serve-card" class="card"></div>
    <div id="serve-sgv-card" class="card"></div>
`;
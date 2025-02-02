// Tabs.js
import './tabs.scss';

export default class Tabs {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    // Select all tabs
    const tabs = this.container.querySelectorAll('.tab');

    // Add click event listeners
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        this.container.querySelectorAll('.tab, .tab-content').forEach(el => el.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Add active class to the corresponding content
        const target = this.container.querySelector(`#${tab.dataset.target}`);
        if (target) target.classList.add('active');
      });
    });
  }
}

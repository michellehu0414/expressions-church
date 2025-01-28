import './Card.scss';

export default class Card {
    constructor(container, options = {}) {
        // Set default values for options
        this.container = container;
        this.title = options.title || 'Default Title';
        this.description = options.description || 'Default Description';
        this.imgSrc = options.imgSrc || '';
        this.button1 = options.button1 || { text: 'Button 1', action: null };
        this.button2 = options.button2 || { text: 'Button 2', action: null };
        this.extraClasses = options.extraClasses || ''; // For theming or layout variations

        this.render();
    }
    render() {
        this.container.innerHTML = `
          <div class="card ${this.extraClasses}">
            <div class="card-image">
              <img src="${this.imgSrc}" alt="${this.title}" />
            </div>
            <div class="card-content">
              <h3>${this.title}</h3>
              <p>${this.description}</p>
              <div class="card-buttons">
                ${this.button1.text ? `<button class="button primary">${this.button1.text}</button>` : ''}
                ${this.button2.text ? `<button class="button secondary">${this.button2.text}</button>` : ''}
              </div>
            </div>
          </div>
        `;

        // Attach event listeners only if buttons are rendered
        const primaryButton = this.container.querySelector('.button.primary');
        const secondaryButton = this.container.querySelector('.button.secondary');

        if (primaryButton && this.button1.action) {
            primaryButton.addEventListener('click', this.button1.action);
        }

        if (secondaryButton && this.button2.action) {
            secondaryButton.addEventListener('click', this.button2.action);
        }
    }

}

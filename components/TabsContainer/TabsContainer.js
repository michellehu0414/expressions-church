export default function initializeTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');

    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-button');
        const tabContents = container.querySelectorAll('.tab-content');
        const tabsMenu = container.querySelector('.tabs-menu');
        const slider = document.createElement('div');
        slider.classList.add('tabs-menu-slider');
        tabsMenu.appendChild(slider);

        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                tabButtons.forEach((btn, btnIndex) => {
                    btn.classList.remove('active');
                    tabContents[btnIndex].classList.remove('active');
                });

                tabContents[index].classList.add('active');
                this.classList.add('active');

                slider.style.left = `${this.offsetLeft}px`;
                slider.style.width = `${this.offsetWidth}px`;

                const offsetLeft = this.offsetLeft;
                tabsMenu.scrollLeft = offsetLeft - tabsMenu.offsetWidth / 4;
            });

            // Initialize slider position if the first tab is active
            if (button.classList.contains('active')) {
                slider.style.left = `${button.offsetLeft}px`;
                slider.style.width = `${button.offsetWidth}px`; // Adjust slider width to match the button
            }
        });
    });
}

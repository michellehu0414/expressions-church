class Lightbox {
  constructor(selector, modalContainer) {
    this.images = document.querySelectorAll(selector);
    this.currentIndex = 0;
    this.createModal(modalContainer);
    this.setupEventListeners();
  }

  createModal(modalContainer) {
    this.modal = document.createElement('div');
    this.modal.classList.add('lightbox');
    this.modal.style.display = 'none'; // Hide the modal initially
    this.modal.innerHTML = `
      <div class="lightbox-content">
        <span class="close"><span class="material-symbols-outlined">close</span>Close</span>
        <img src="" alt="Full Image" id="full-image">
        <div class="caption"></div>
        <a class="prev">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </a>
        <a class="next">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
      </div>
    `;
    modalContainer.appendChild(this.modal);
    this.fullImage = this.modal.querySelector('#full-image');
    this.caption = this.modal.querySelector('.caption');
    this.closeBtn = this.modal.querySelector('.close');
    this.prevBtn = this.modal.querySelector('.prev');
    this.nextBtn = this.modal.querySelector('.next');
  }

  setupEventListeners() {
    this.images.forEach((image, index) => {
      image.addEventListener('click', () => {
        this.openModal(index);
      });
    });

    this.closeBtn.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeModal();
      } else if (event.key === 'ArrowLeft') {
        this.navigateImage(-1);
      } else if (event.key === 'ArrowRight') {
        this.navigateImage(1);
      }
    });
    this.prevBtn.addEventListener('click', () => this.navigateImage(-1));
    this.nextBtn.addEventListener('click', () => this.navigateImage(1));
  }

  openModal(index) {
    this.currentIndex = index;
    const image = this.images[index];
    this.fullImage.src = image.src;
    this.caption.textContent = image.alt;
    this.modal.style.display = 'block';
    this.caption.style.display = 'block'; // Show the caption
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  navigateImage(step) {
    this.currentIndex = (this.currentIndex + step + this.images.length) % this.images.length;
    const image = this.images[this.currentIndex];
    this.fullImage.src = image.src;
    this.caption.textContent = image.alt;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer1 = document.getElementById('lightbox-lf-all');
  new Lightbox('.lf-wireframes-all .image', modalContainer1);
});
/**
 * @typedef {Object} SlideData
 * @property {string} imgSrc - Path to the image that will be added to the slide.
 * @property {string} imgAlt - Alternative text for the slide image.
 * @property {string} slideTitle - Text for the slide title attribute.
 * @property {string} url - The URL that the slide will redirect to.
 */

export default class Carousel {
  /**
   * @param {Node} parentElement - A node with the element to which the carousel will be appended.
   * @param {SlideData[]} data - An array of SlideData objects.
   * @param {number} delay - Time in milliseconds to the autoplay.
   */
  constructor(parentElement, data, delay) {
    this.parentElement = parentElement;
    this.data = [...data];
    this.delay = delay;

    this.slides = this.generateSlides();
    this.navButtons = this.generateNavButtons();
    this.currentSlide = 0;
    this.intervalId;
  }

  renderCurrentSlide(event) {
    const currentSlideElement = this.slides.find((img) =>
      img.classList.contains("active")
    );

    const currentNavBtn = this.navButtons.find((btn) =>
      btn.classList.contains("active")
    );

    if (currentSlideElement) currentSlideElement.classList.remove("active");
    if (currentNavBtn) currentNavBtn.classList.remove("active");

    this.slides[this.currentSlide].classList.add("active");
    this.navButtons[this.currentSlide].classList.add("active");

    // Restart only when a slide is selected by the user
    if (event) this.restartSlideInterval();
  }

  prevSlide(event) {
    const currentlyOnFirst = this.currentSlide === 0;
    const lastSlide = this.slides.length - 1;

    this.currentSlide = currentlyOnFirst ? lastSlide : this.currentSlide - 1;
    this.renderCurrentSlide(event);
  }

  nextSlide(event) {
    const currentlyOnLast = this.currentSlide === this.slides.length - 1;

    this.currentSlide = currentlyOnLast ? 0 : this.currentSlide + 1;
    this.renderCurrentSlide(event);
  }

  generateSlides() {
    return this.data.map((data) => {
      const slide = document.createElement("a");
      const imgElement = document.createElement("img");

      slide.className = "slide";
      slide.href = data.url;
      slide.title = data.slideTitle;

      imgElement.className = "slide-image";
      imgElement.src = data.imgSrc;
      imgElement.alt = data.imgAlt;
      slide.appendChild(imgElement);

      return slide;
    });
  }

  generateNavButtons() {
    const buttons = [];

    for (let i = 0; i < this.slides.length; i++) {
      const btn = document.createElement("button");

      btn.className = "jump-to-slide";
      btn.title = `Pular para o slide ${i + 1}`;

      btn.addEventListener("click", (e) => {
        this.currentSlide = i;
        this.renderCurrentSlide(e);
      });

      buttons.push(btn);
    }

    return buttons;
  }

  restartSlideInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextSlide(), this.delay);
  }

  render() {
    const carousel = document.createElement("div");
    const slidesContainer = document.createElement("div");
    const prevSlideBtn = document.createElement("button");
    const nextSlideBtn = document.createElement("button");
    const navButtonsContainer = document.createElement("div");

    carousel.className = "carousel";

    slidesContainer.className = "slides-container";

    prevSlideBtn.textContent = "<";
    prevSlideBtn.title = "Slide anterior";
    prevSlideBtn.className = "prev-slide";
    prevSlideBtn.addEventListener("click", (e) => this.prevSlide(e));

    nextSlideBtn.textContent = ">";
    nextSlideBtn.title = "Próximo slide";
    nextSlideBtn.className = "next-slide";
    nextSlideBtn.addEventListener("click", (e) => this.nextSlide(e));

    navButtonsContainer.className = "nav-buttons-container";

    this.intervalId = setInterval(() => this.nextSlide(), this.delay);

    this.renderCurrentSlide();

    slidesContainer.append(...this.slides);
    carousel.appendChild(slidesContainer);
    carousel.appendChild(prevSlideBtn);
    navButtonsContainer.append(...this.navButtons);
    carousel.appendChild(navButtonsContainer);
    carousel.appendChild(nextSlideBtn);
    this.parentElement.appendChild(carousel);
  }
}

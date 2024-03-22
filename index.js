/**
 * @typedef {Object} SlideData
 * @property {string} imgSrc - Path to the image that will be added to the slide
 * @property {string} imgAlt - Alternative text for the slide image
 * @property {string} slideTitle - Text for the slide title attribute
 * @property {string} url - The URL that the slide will redirect to
 */

class Carousel {
  /**
   * @param {Node} parentElement - A node with the element that the carousel will append to.
   * @param {SlideData[]} data - An array of SlideData objects
   * @param {number} delay - Time in ms to the autoplay
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

const root = document.querySelector("#root");
const imagesSrc = [];
const data = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1710514584727-9df2497e0a6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Imagem 1",
    slideTitle: "Imagem 1",
    url: "https://google.com",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1557227065-79fb4eb2571c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Imagem 2",
    slideTitle: "Imagem 2",
    url: "https://google.com",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1710831784683-73228be0a085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Imagem 3",
    slideTitle: "Imagem 3",
    url: "https://google.com",
  },
];
const carousel = new Carousel(root, data, 30000);

carousel.render();

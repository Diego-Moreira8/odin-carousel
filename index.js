class Carousel {
  constructor(parentElement, imgLinks = [], delay) {
    this.parentElement = parentElement;
    this.imgLinks = [...imgLinks];
    this.delay = delay;

    this.imgElements = this.generateImgElements();
    this.navButtons = this.generateNavButtons();
    this.slidesContainer = document.createElement("div");
    this.currentSlide = 0;
    this.intervalId;
  }

  renderCurrentSlide(event) {
    const currentSlideElement = this.imgElements.find((img) =>
      img.classList.contains("active")
    );

    const currentNavBtn = this.navButtons.find((btn) =>
      btn.classList.contains("active")
    );

    if (currentSlideElement) currentSlideElement.classList.remove("active");
    if (currentNavBtn) currentNavBtn.classList.remove("active");

    this.imgElements[this.currentSlide].classList.add("active");
    this.navButtons[this.currentSlide].classList.add("active");

    // Restart only when a slide is selected by the user
    if (event) this.restartSlideInterval();
  }

  prevSlide(event) {
    const currentlyOnFirst = this.currentSlide === 0;
    const lastSlide = this.imgElements.length - 1;

    this.currentSlide = currentlyOnFirst ? lastSlide : this.currentSlide - 1;
    this.renderCurrentSlide(event);
  }

  nextSlide(event) {
    const currentlyOnLast = this.currentSlide === this.imgElements.length - 1;

    this.currentSlide = currentlyOnLast ? 0 : this.currentSlide + 1;
    this.renderCurrentSlide(event);
  }

  generateImgElements() {
    return this.imgLinks.map((link) => {
      const imgElement = document.createElement("img");
      imgElement.src = link;
      imgElement.className = "slide";
      return imgElement;
    });
  }

  generateNavButtons() {
    const buttons = [];

    for (let i = 0; i < this.imgElements.length; i++) {
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
    console.log(this.intervalId);
  }

  render() {
    const carousel = document.createElement("div");
    const prevSlideBtn = document.createElement("button");
    const nextSlideBtn = document.createElement("button");
    const navButtonsContainer = document.createElement("div");

    carousel.className = "carousel";

    this.slidesContainer.className = "slides-container";

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

    this.slidesContainer.append(...this.imgElements);
    carousel.appendChild(this.slidesContainer);
    carousel.appendChild(prevSlideBtn);
    navButtonsContainer.append(...this.navButtons);
    carousel.appendChild(navButtonsContainer);
    carousel.appendChild(nextSlideBtn);
    this.parentElement.appendChild(carousel);
  }
}

const images = [
  "https://images.unsplash.com/photo-1710514584727-9df2497e0a6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557227065-79fb4eb2571c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710831784683-73228be0a085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557227065-79fb4eb2571c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const carousel = new Carousel(document.querySelector("#root"), images, 3000);
const carousel2 = new Carousel(document.querySelector("#root"), images, 500);

carousel.render();
// carousel2.render();

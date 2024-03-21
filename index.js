class Carousel {
  constructor(parentElement, imgLinks = []) {
    this.parentElement = parentElement;
    this.imgLinks = [...imgLinks];
    this.imgElements = this.generateImgElements();
    this.carousel = document.createElement("div");
    this.content = document.createElement("div");
    this.prevSlideBtn = document.createElement("button");
    this.nextSlideBtn = document.createElement("button");
    this.currentSlide = 0;
  }

  renderCurrentSlide() {
    const currentSlideElement =
      this.content.querySelector(".content > .active");

    if (currentSlideElement) {
      currentSlideElement.classList.remove("active");
    }

    this.imgElements[this.currentSlide].classList.add("active");
  }

  nextSlide() {
    console.log(this.imgElements);
    const currentlyOnLast = this.currentSlide === this.imgElements.length - 1;

    this.currentSlide = currentlyOnLast ? 0 : this.currentSlide + 1;
    this.renderCurrentSlide();
  }

  prevSlide() {
    const currentlyOnFirst = this.currentSlide === 0;
    const lastSlide = this.imgElements.length - 1;

    this.currentSlide = currentlyOnFirst ? lastSlide : this.currentSlide - 1;
    this.renderCurrentSlide();
  }

  generateImgElements() {
    return this.imgLinks.map((link) => {
      const imgElement = document.createElement("img");
      imgElement.src = link;
      imgElement.className = "slide";
      return imgElement;
    });
  }

  render() {
    this.carousel.className = "carousel";

    this.content.className = "content";

    this.prevSlideBtn.textContent = "<";
    this.prevSlideBtn.className = "prev-slide";
    this.prevSlideBtn.addEventListener("click", () => this.prevSlide());

    this.nextSlideBtn.textContent = ">";
    this.nextSlideBtn.className = "next-slide";
    this.nextSlideBtn.addEventListener("click", () => this.nextSlide());

    this.renderCurrentSlide();

    this.imgElements.forEach((img) => this.content.appendChild(img));
    this.carousel.appendChild(this.content);
    this.carousel.appendChild(this.prevSlideBtn);
    this.carousel.appendChild(this.nextSlideBtn);
    this.parentElement.appendChild(this.carousel);
  }
}

const images = [
  "https://images.unsplash.com/photo-1710514584727-9df2497e0a6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557227065-79fb4eb2571c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710831784683-73228be0a085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const carousel = new Carousel(document.querySelector("#root"), images);
const carousel2 = new Carousel(document.querySelector("#root"), images);

carousel.render();
carousel2.render();

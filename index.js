const previousBtn = document.querySelector("#previous-button");
const nextBtn = document.querySelector("#next-button");
const jumpToBtns = document.querySelectorAll(".jump-to-button");

function carousel() {
  let slidesURLs = [];

  let currentSlide = 0;

  function changeSlide() {
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {}

  function prevSlide() {}

  return { changeSlide, nextSlide, prevSlide };
}

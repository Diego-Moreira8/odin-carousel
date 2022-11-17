export default (function carousel() {
  const carousel = document.querySelector("#carousel");

  const carouselSlides = carousel.querySelector("#carousel-slides");

  let allSlides = carousel.querySelectorAll(".carousel-slide");
  let allJumpToBtns = carousel.querySelectorAll(".jump-to-button");

  const jumpToButtons = carousel.querySelector("#jump-to-buttons");

  carousel
    .querySelector("#previous-button")
    .addEventListener("click", prevSlide);
  carousel.querySelector("#next-button").addEventListener("click", nextSlide);

  let slidesURLs = [];
  let currentSlide = 0;

  function renderSlidesAndButtons() {
    jumpToButtons.innerHTML = "";
    carouselSlides.innerHTML = "";

    for (let i = 0; i < slidesURLs.length; i++) {
      carouselSlides.insertAdjacentHTML(
        "beforeend",
        `<div class="carousel-slide" data-slide-index="${i}"
          style="background-image: url(${slidesURLs[i]})"></div>`
      );
      jumpToButtons.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="jump-to-button" 
          data-btn-index="${i}"></button>`
      );
    }

    allJumpToBtns = carousel.querySelectorAll(".jump-to-button");
    allJumpToBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        changeSlide(e.target.getAttribute("data-btn-index"));
      })
    );

    allSlides = carousel.querySelectorAll(".carousel-slide");

    changeSlide(0);
  }

  function addSlides(linksArray) {
    slidesURLs = linksArray;
    renderSlidesAndButtons();
  }

  function nextSlide() {
    if (currentSlide < slidesURLs.length - 1) {
      changeSlide(++currentSlide);
    } else if (currentSlide >= slidesURLs.length - 1) {
      changeSlide(0);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      changeSlide(--currentSlide);
    } else if (currentSlide <= 0) {
      changeSlide(slidesURLs.length - 1);
    }
  }

  function changeSlide(index) {
    const groups = [allSlides, allJumpToBtns];

    groups.forEach((group) => {
      group.forEach((slide) => slide.classList.remove("active"));
      group[index].classList.add("active");
    });

    currentSlide = index;
  }

  (function timeout() {
    setTimeout(function () {
      nextSlide();
      timeout();
    }, 5000);
  })();

  return { addSlides };
})();

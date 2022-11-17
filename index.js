const carousel = (() => {
  const carousel = document.querySelector("#carousel");

  const carouselSlides = carousel.querySelector("#carousel-slides");
  let allSlides = carousel.querySelectorAll(".carousel-slide");

  carousel.querySelector("#next-button").addEventListener("click", () => {
    if (currentSlide > slidesURLs.length) {
      showSlide((currentSlide = 0));
    } else {
      showSlide(++currentSlide);
    }
  });
  const jumpToButtons = carousel.querySelector("#jump-to-buttons");

  let slidesURLs = [];
  let currentSlide = 0;

  function renderSlides() {
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
        data-btn-index="${i}">O</button>`
      );
    }
    allSlides = carousel.querySelectorAll(".carousel-slide");
  }

  function addSlide(url) {
    slidesURLs.push(url);
    renderSlides();
  }

  function showSlide(index) {
    allSlides.forEach((slide) => slide.classList.remove("active"));
    allSlides[index].classList.add("active");
  }

  return { addSlide };
})();

carousel.addSlide("1");
carousel.addSlide("2");
carousel.addSlide("3");
carousel.addSlide("4");

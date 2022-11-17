const carousel = (() => {
  const carousel = document.querySelector("#carousel");

  const carouselSlides = carousel.querySelector("#carousel-slides");
  let allSlides = carousel.querySelectorAll(".carousel-slide");

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
        style="background-image: url(${slidesURLs[i]})">${i + 1}</div>`
      );
      jumpToButtons.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="jump-to-button" 
        data-btn-index="${i}">O</button>`
      );
    }

    jumpToButtons.querySelectorAll(".jump-to-button").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        changeSlide(e.target.getAttribute("data-btn-index"));
      })
    );

    allSlides = carousel.querySelectorAll(".carousel-slide");

    changeSlide(0);
  }

  function addSlide(url) {
    slidesURLs.push(url);
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
    allSlides.forEach((slide) => slide.classList.remove("active"));
    allSlides[index].classList.add("active");
    currentSlide = index;
  }

  return { addSlide };
})();

carousel.addSlide("1");
carousel.addSlide("2");
carousel.addSlide("3");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");
carousel.addSlide("4");

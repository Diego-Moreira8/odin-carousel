const carousel = (() => {
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

carousel.addSlides([
  "https://images.unsplash.com/photo-1667986968934-bf1fd9db241f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1660836491055-9b2d8950a63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1668094497457-29f4bd775c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
]);

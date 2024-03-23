import Carousel from "./Carousel.js";

const headerData = [
  {
    imgSrc: "./images/dogs-1",
    imgAlt: "A dog",
    slideTitle: "A Dog",
    url: "#",
  },
];
const asideData = [];
const mainData = [];
const footerData = [];

const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main = document.querySelector(".main-carousel");
const footer = document.querySelector("footer");

const headerCarousel = new Carousel(header, headerData, 5000);
const asideCarousel = new Carousel(aside);
const mainCarousel = new Carousel(main);
const footerCarousel = new Carousel(footer);

headerCarousel.render();

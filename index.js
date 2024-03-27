import Carousel from "./classes/Carousel.js";
import {
  headerData,
  asideData,
  mainData,
  footerData,
} from "./data/slidesData.js";

const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main = document.querySelector(".carousel-main");
const footer = document.querySelector("footer");

const headerCarousel = new Carousel(header, headerData, 5000);
const asideCarousel = new Carousel(aside, asideData, 3000);
const mainCarousel = new Carousel(main, mainData, 4000);
const footerCarousel = new Carousel(footer, footerData, 6000);

headerCarousel.render();
asideCarousel.render();
mainCarousel.render();
footerCarousel.render();

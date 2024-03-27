import Navbar from "./classes/Navbar.js";
import Carousel from "./classes/Carousel.js";
import navbarData from "./data/navbarData.js";
import {
  headerData,
  asideData,
  mainData,
  footerData,
} from "./data/slidesData.js";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const aside = document.querySelector("aside");
const main = document.querySelector(".carousel-main");
const footer = document.querySelector("footer");

const headerCarousel = new Carousel(header, headerData, 5000);
const asideCarousel = new Carousel(aside, asideData, 3000);
const mainCarousel = new Carousel(main, mainData, 4000);
const footerCarousel = new Carousel(footer, footerData, 6000);
const navbar = new Navbar(nav, navbarData);

headerCarousel.render();
asideCarousel.render();
mainCarousel.render();
footerCarousel.render();
navbar.render();

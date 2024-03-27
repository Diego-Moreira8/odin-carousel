import Carousel from "./classes/Carousel.js";
import Navbar from "./classes/Navbar.js";
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
const navbar = new Navbar(nav, [
  {
    title: "Menu",
    subMenu: [
      { title: "Sublink 1", url: "#" },
      { title: "Sublink 2", url: "#" },
    ],
  },
  {
    title: "Menu",
    subMenu: [
      { title: "Sublink 1", url: "#" },
      { title: "Sublink 2", url: "#" },
      { title: "Sublink 3", url: "#" },
      { title: "Sublink 4", url: "#" },
      { title: "Sublink 5", url: "#" },
    ],
  },
  {
    title: "Menu",
    subMenu: [
      { title: "Sublink 1", url: "#" },
      { title: "Sublink 2", url: "#" },
      { title: "Sublink 3", url: "#" },
    ],
  },
  {
    title: "Link",
    url: "#",
  },
]);

navbar.render();
headerCarousel.render();
asideCarousel.render();
mainCarousel.render();
footerCarousel.render();

export default function navBar() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((el) => el.addEventListener("mouseenter", toggleDropdown));
  dropdowns.forEach((el) => el.addEventListener("mouseleave", toggleDropdown));

  function toggleDropdown(e) {
    const container = e.target.querySelector(".dropdown-container");
    container.classList.toggle("active");
  }
}

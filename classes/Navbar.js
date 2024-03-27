export default class Navbar {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = [...data];
  }

  #createNavElements(linksArray) {
    const ul = document.createElement("ul");
    const navLinks = linksArray.map((link) => {
      const li = document.createElement("li");
      const linkElement = document.createElement(link.url ? "a" : "button");

      li.className = "nav-link";
      li.appendChild(linkElement);

      linkElement.textContent = link.title;
      linkElement.className = "nav-link-element";

      if (link.url) {
        linkElement.href = link.url;
      } else if (link.subMenu) {
        const subMenu = this.#createNavElements(link.subMenu);
        const toggleSubmenu = (e) => {
          const mouseEnter = e.type === "mouseenter";
          subMenu.classList[mouseEnter ? "add" : "remove"]("active");
        };

        linkElement.after(subMenu);

        li.addEventListener("mouseenter", toggleSubmenu);
        li.addEventListener("mouseleave", toggleSubmenu);
      } else {
        console.error(
          "Couldn't find a 'url' or 'subMenu' value. Check the links data object."
        );
        return;
      }

      return li;
    });

    ul.className = "nav-submenu";
    ul.append(...navLinks);

    return ul;
  }

  #createNav() {
    const navbar = this.#createNavElements(this.data);
    navbar.className = "nav-root";
    return navbar;
  }

  render() {
    const navLinks = this.#createNav();
    this.parentElement.appendChild(navLinks);
  }
}

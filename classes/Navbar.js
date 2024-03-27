export default class Navbar {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = [...data];
  }

  createNav() {
    const ul = document.createElement("ul");
    const navLinks = this.data.map((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = link.title;
      a.href = link.url;

      li.className = "nav-link";
      li.appendChild(a);

      return li;
    });

    ul.className = "nav-root";
    ul.append(...navLinks);

    return ul;
  }

  render() {
    this.parentElement.appendChild(this.createNav());
  }
}

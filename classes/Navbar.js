export default class Navbar {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = [...data];
  }

  render() {
    console.log(this.data);
  }
}

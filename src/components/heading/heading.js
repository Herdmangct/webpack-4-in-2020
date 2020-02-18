import "./heading.scss";

class Heading {
  render() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpack is awesome";
    h1.classList.add("heading");
    body.appendChild(h1);
  }
}

export default Heading;

import "./heading.scss";

class Heading {
  render(pageTitle) {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.innerHTML = 'This is the "' + pageTitle + '" page!';
    h1.classList.add("heading");
    body.appendChild(h1);
  }
}

export default Heading;

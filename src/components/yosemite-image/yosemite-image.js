import yosemite from "./yosemite.jpg";
import "./yosemite-image.scss";

class YosemiteImage {
  render() {
    const image = document.createElement("img");
    image.src = yosemite;
    image.alt = "Yosemite Image";
    image.classList.add("yosemite-image");

    const body = document.querySelector("body");
    body.appendChild(image);
  }
}

export default YosemiteImage;

import yosemite from "./yosemite.jpg";

function addImage() {
  const image = document.createElement("img");
  image.alt = "Yosemite";
  image.width = 300;
  image.src = yosemite;

  const body = document.querySelector("body");
  body.appendChild(image);
}

export default addImage;

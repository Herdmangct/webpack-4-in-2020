import "./index.scss";
import HelloWorldButton from "./components/hello-world-button";
import Heading from "./components/heading/heading.js";

const heading = new Heading();
heading.render("Hello, world!");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV == "production") {
  console.log("PRODUCTION");
} else if (process.env.NODE_ENV == "development") {
  console.log("DEVELOPMENT");
}

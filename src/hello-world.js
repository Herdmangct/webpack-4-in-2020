import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import HelloWorldButton from "./components/hello-world-button";
import Heading from "./components/heading/heading.js";
import "bootstrap";

library.add(faSpinner);
dom.watch();

const heading = new Heading();
heading.render("Hello, world!");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV == "production") {
  console.log("PRODUCTION");
} else if (process.env.NODE_ENV == "development") {
  console.log("DEVELOPMENT");
}

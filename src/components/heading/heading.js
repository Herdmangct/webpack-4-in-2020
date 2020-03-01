import "./heading.scss";
import $ from "jquery";

class Heading {
  render(pageTitle) {
    const body = $("body");
    const h1 = $("<h1>");
    h1.text('This is the "' + pageTitle + '" page!');
    h1.addClass("heading");
    body.append(h1);
  }
}

export default Heading;

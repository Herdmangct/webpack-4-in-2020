const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function(request, result) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  result.send(contentFromHtmlFile);
});

app.listen(3000, function() {
  console.log("The app is up and running at http://localhost:3000");
});

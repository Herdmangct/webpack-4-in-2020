const express = require("express");
const app = express();

app.get("/", function(request, result) {
  result.send("Some dummy content");
});

app.listen(3000, function() {
  console.log("The app is running at http://localhost:3000");
});

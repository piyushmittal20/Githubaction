const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, I am used for Github Actions!!");
});

app.use("/hello", (req, res) => {
  res.send("Hello, I am an Hello Route...");
});

app.listen(4000, () => {
  console.log(`Server is running on PORT 4000!!!!`);
});

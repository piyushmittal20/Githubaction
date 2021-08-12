const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, I am used for Github Actions!!");
});

app.listen(4000, () => {
  console.log(`Server is running on PORT 4000`);
});

const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res, next) => {
  let image = await axios("https://source.unsplash.com/random");
  res.send(`<img src="${image.request.res.responseUrl}" />`);
});

app.listen(4000, () => {
  console.log(`Server is running on PORT 4000!!!`);
});

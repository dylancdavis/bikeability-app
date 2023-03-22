const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3001;

const testData = {
  propRed: "red",
  propBlue: "blue",
};

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json(testData);
});

app.listen(PORT, () => {
  `Server running on port ${PORT}`;
});

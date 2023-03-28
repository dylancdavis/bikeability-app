const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Initialize utilities
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json(testData);
});

app.listen(PORT, () => {
  `Server running on port ${PORT}`;
});

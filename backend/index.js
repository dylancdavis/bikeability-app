const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const State = require("./models/state");
const City = require("./models/city");

const app = express();
const PORT = 3001;

// Initialize utilities
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/locations/states", async (req, res) => {
  const states = await State.find({});
  response.json(states);
});

app.get("/locations/states", async (req, res) => {
  const cities = await City.find({});
  response.json(cities);
});

app.listen(PORT, () => {
  `Server running on port ${PORT}`;
});

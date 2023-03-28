const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const State = require("./models/state");
const City = require("./models/city");
const config = require("./utils/config");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(config.MONGO_URI);

// Initialize utilities
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/api/locations/states", async (req, res) => {
  const states = await State.find({});
  response.json(states);
});

app.get("/api/locations/cities", async (req, res) => {
  const cities = await City.find({});
  response.json(cities);
});

app.listen(config.PORT, () => {
  `Server running on port ${config.PORT}`;
});

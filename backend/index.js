const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const State = require("./models/state");
const City = require("./models/city");
const config = require("./utils/config");
const mongoose = require("mongoose");
const axios = require("axios");

const errorHandler = require("./utils/errorHandler.js");

require("dotenv").config();
require("express-async-errors");

const app = express();

mongoose.connect(config.MONGO_URI);

// Initialize utilities
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/api/locations/states", async (req, res) => {
  const states = await State.find({});
  res.json(states);
});

app.get("/api/locations/cities/:stateId", async (req, res) => {
  const stateId = req.params.stateId;
  const cities = await City.find({ state_id: stateId });
  res.json(cities);
});

app.get("/api/scores", async (req, res) => {
  const { address, lat, lng } = req.query;
  const apiUrl = "https://api.walkscore.com/score";
  const scores = await axios.get(
    `${apiUrl}?format=json&address=${address}&lat=${lat}&lon=${lng}&bike=1&wsapikey=${process.env.WALK_SCORE_KEY}`
  );
  res.send(scores.data);
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  `Server running on port ${config.PORT}`;
});

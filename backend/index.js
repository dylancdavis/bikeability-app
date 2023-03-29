const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const State = require("./models/state");
const City = require("./models/city");
const config = require("./utils/config");
const mongoose = require("mongoose");
const axios = require("axios");

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
  res.send(address + lat + lng);
});

app.listen(config.PORT, () => {
  `Server running on port ${config.PORT}`;
});

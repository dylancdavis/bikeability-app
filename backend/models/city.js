const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  city: String,
  city_ascii: String,
  state_id: String,
  state_name: String,
  county_fips: String,
  county_name: String,
  lat: Number,
  lng: Number,
  population: Number,
  density: Number,
  source: String,
  military: String,
  incorporated: String,
  timezone: String,
  ranking: Number,
  zips: String,
  id: String,
});

citySchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

const City = mongoose.model("City", citySchema);

module.exports = City;

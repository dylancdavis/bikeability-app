const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  state: String,
  state_id: String,
});

stateSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;

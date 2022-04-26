const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: Number,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
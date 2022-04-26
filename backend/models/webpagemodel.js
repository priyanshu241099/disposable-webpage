const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  assets: Array,
  data: String,
  forms: String,
  createdAt: { type: Date, default: new Date() },

  createdBy:{type:data, default: new Date()},
});

 

const model = mongoose.model("users", schema);

module.exports = model;
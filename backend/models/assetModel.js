const mongoose = require("../connection");

const schema = new mongoose.Schema({
  file: String,
  createdAt: Date,
  createdBy:{type:mongoose.Types.ObjectId, ref: 'users'},
});

 

const model = mongoose.model("assets", schema);

module.exports = model;
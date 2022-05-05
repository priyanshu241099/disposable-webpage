const mongoose = require("mongoose");

const url =
  "mongodb+srv://priyanshu:9559759519@cluster0.rodqn.mongodb.net/disposablewebpage?retryWrites=true&w=majority";

  // asynchronous function
// returns promise
mongoose
.connect(url)
.then(() => {
  console.log("sucessfully connected");
}) // when result is successfull
.catch((err) => {
  console.error(err);
}); // when there is some error

module.exports = mongoose;
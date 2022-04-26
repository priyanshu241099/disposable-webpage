// importing express
const express = require("express");

// importing userRouter
const UserRouter = require("./routers/UserRouter");
const UtilRouter = require("./routers/util");

// importing cors
const cors = require("cors");

// initialize express app
const app = express();

const port = 5000;

app.use(express.json());

app.use(
  cors({
    // allowing the frontend to request
    origin: ["http://localhost:3000"],
  })
);

// using middleware
app.use("/user", UserRouter);
app.use("/util", UtilRouter);

// endpoints or route
app.get("/user", (req, res) => {
  console.log("a request from client!!");
  res.send("request processed at /");
});

app.get("/", (req, res) => {
  console.log("a request from client at home!!");
  res.send("request processed at /home");
});

app.get("/home", (req, res) => {
  console.log("a request from client at home!!");
  res.send("request processed at /home");
});

// start the server
app.listen(port, () => {
  console.log("server started...");
});

// To run server : npm run dev
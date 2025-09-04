import express from "express";
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! update");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log("env port: ", process.env.PORT);
});

import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// config template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
console.log(__dirname);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

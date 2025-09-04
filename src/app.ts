import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";
import getConnection from "./config/database";

const app = express();
const port = process.env.PORT || 8080;

// config template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// config static files
app.use(express.static("public"));

// config req body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config routes
webRoutes(app);

// start server
getConnection();

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

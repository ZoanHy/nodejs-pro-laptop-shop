import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", (req, res) => {
    res.render("home");
  });

  router.get("/abc", (req, res) => {
    res.send("abc route");
  });

  app.use("/", router);
};

export default webRoutes;

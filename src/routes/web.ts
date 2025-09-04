import {
  getCreateUserPage,
  getHomePage,
  postCreateUser,
  postDeleteUser,
} from "@/controllers/user.controller";
import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUser);
  router.post("/handle-delete-user/:id", postDeleteUser);

  app.use("/", router);
};

export default webRoutes;

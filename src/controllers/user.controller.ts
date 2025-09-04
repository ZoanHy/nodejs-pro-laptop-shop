import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

export const getHomePage = (req: Request, res: Response) => {
  res.render("home");
};

export const getCreateUserPage = (req: Request, res: Response) => {
  res.render("create-user");
};

export const postCreateUser = (req: Request, res: Response) => {
  //   console.log(">>> check data: ", req.body);

  const { fullName, email, address } = req.body;

  // call service
  handleCreateUser(fullName, email, address);

  res.redirect("/");
};

import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

export const getHomePage = async (req: Request, res: Response) => {
  // get users from db
  const users = await getAllUsers();
  console.log(">>> check users: ", users);
  res.render("home", { users: users });
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

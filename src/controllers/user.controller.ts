import {
  getAllUsers,
  handleCreateUser,
  handleDeleteUser,
} from "@/services/user.service";
import { Request, Response } from "express";

export const getHomePage = async (req: Request, res: Response) => {
  // get users from db
  const users = await getAllUsers();
  // console.log(">>> check users: ", users);
  res.render("home", { users: users });
};

export const getCreateUserPage = (req: Request, res: Response) => {
  res.render("create-user");
};

export const postCreateUser = async (req: Request, res: Response) => {
  //   console.log(">>> check data: ", req.body);

  const { fullName, email, address } = req.body;

  // call service
  await handleCreateUser(fullName, email, address);

  res.redirect("/");
};

export const postDeleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  await handleDeleteUser(userId);

  res.redirect("/");
};

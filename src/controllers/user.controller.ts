import {
  getAllUsers,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUserById,
  handleViewUser,
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

export const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await handleViewUser(id);

  return res.render("view-user", { user: user });
};

export const postUpdateUser = async (req: Request, res: Response) => {
  const { id, fullName, email, address } = req.body;

  await handleUpdateUserById(id, fullName, email, address);

  return res.redirect("/");
};

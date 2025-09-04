import { prisma } from "@/config/client";
import getConnection from "@/config/database";

export const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  // insert into database

  await prisma.user.create({
    data: { fullName: fullName, email: email, address: address },
  });
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const handleDeleteUser = async (userId: string) => {
  try {
    const connection = await getConnection();

    const [results, fields] = await connection.execute(
      "DELETE FROM `users` WHERE id = ?",
      [userId]
    );
  } catch (err) {
    console.error("Error deleting user: ", err);
  }
};

export const handleViewUser = async (userId: string) => {
  const users = await prisma.user.findUnique({
    where: { id: +userId },
  });
  return users;
};

export const handleUpdateUserById = async (
  id: string,
  fullName: string,
  email: string,
  address: string
) => {
  const updateUser = await prisma.user.update({
    where: { id: +id },
    data: { fullName, email, address },
  });
  return updateUser;
};

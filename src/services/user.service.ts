import getConnection from "@/config/database";

export const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  // insert into database

  try {
    const connection = await getConnection();

    const [result, fields] = await connection.execute(
      "INSERT INTO users (fullName, email, address) VALUES (?, ?, ?)",
      [fullName, email, address]
    );

    return result;
  } catch (err) {
    console.error("Error creating user: ", err);
  }
};

export const getAllUsers = async () => {
  try {
    const connection = await getConnection();

    const [results, fields] = await connection.query("SELECT * FROM `users`");

    return results;
  } catch (err) {
    return [];
  }
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
  try {
    const connection = await getConnection();

    const [results, fields] = await connection.execute(
      "SELECT * FROM `users` WHERE id = ?",
      [userId]
    );

    return results[0];
  } catch (err) {
    console.error("Error viewing user: ", err);
  }
};

export const handleUpdateUserById = async (
  id: string,
  fullName: string,
  email: string,
  address: string
) => {
  try {
    const connection = await getConnection();

    const [results, fields] = await connection.execute(
      "UPDATE `users` SET fullName = ?, email = ?, address = ? WHERE id = ?",
      [fullName, email, address, id]
    );

    return results[0];
  } catch (err) {
    console.error("Error updating user: ", err);
  }
};

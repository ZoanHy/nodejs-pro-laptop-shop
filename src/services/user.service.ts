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
  const connection = await getConnection();

  try {
    const [results, fields] = await connection.execute(
      "DELETE FROM `users` WHERE id = ?",
      [userId]
    );
  } catch (err) {
    console.error("Error deleting user: ", err);
  }
};

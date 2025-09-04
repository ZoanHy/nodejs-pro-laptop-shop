import getConnection from "../config/database";

export const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  // insert into database

  const connection = await getConnection();

  const [result, fields] = await connection.execute(
    "INSERT INTO users (fullName, email, address) VALUES (?, ?, ?)",
    [fullName, email, address]
  );

  return result;
};

export const getAllUsers = async () => {
  const connection = await getConnection();

  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");

    return results;
  } catch (err) {
    return [];
  }

  return "get all user";
};

import getConnection from "../config/database";

export const handleCreateUser = (
  fullName: string,
  email: string,
  address: string
) => {
  // insert into database

  // return result
  console.log("insert a new user");
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

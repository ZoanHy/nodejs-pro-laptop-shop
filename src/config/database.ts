import mysql from "mysql2/promise";

// Create the connection to database
const getConnection = async () => {
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "@Bcd1234",
    database: "test_db",
  });

  return connection;
};

export default getConnection;

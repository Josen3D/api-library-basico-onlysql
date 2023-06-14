// import pool from mysql2/promise
import { createPool } from "mysql2/promise";

// create env variables to connect
const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

// export pool connection to DB
export const pool = createPool({
  host,
  database,
  user,
  password,
});

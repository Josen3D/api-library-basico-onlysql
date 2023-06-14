// import pool from database/mysql.js
import { pool } from "../database/mysql.js";

export const getAllUsers = async () => {
  try {
    const query = "SELECT * FROM users";
    const responseGet = await pool.query(query);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneUser = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE id_user = ?";
    const responseGet = await pool.query(query, [id]);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewUser = async (
  name,
  last_names,
  dni,
  residence,
  town,
  province,
  birthdate
) => {
  try {
    const query =
      "INSERT INTO users(name, last_names, dni, residence, town, province, birthdate) VALUES (?,?,?,?,?,?,?)";
    const responseCreate = await pool.query(query, [
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate,
    ]);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneUser = async (
  id,
  name,
  last_names,
  dni,
  residence,
  town,
  province,
  birthdate
) => {
  try {
    const query =
      "UPDATE users SET name=?, last_names=?, dni=?, residence=?, town=?, province=?, birthdate=?, updatedAt=NOW() WHERE id_user = ?";
    const responseUpdate = await pool.query(query, [
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate,
      id,
    ]);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE id_user = ?";
    const responseDelete = await pool.query(query, [id]);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

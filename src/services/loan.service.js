// import pool from database/mysql.js
import { pool } from "../database/mysql.js";

export const getAllLoans = async () => {
  try {
    const query =
      "SELECT l.id_loan, l.loan_date, l.end_date, l.return_date, u.name, u.last_names, b.title FROM loans l " +
      "INNER JOIN users u ON l.id_user = u.id_user INNER JOIN books b ON l.id_book = b.id_book";
    const responseGet = await pool.query(query);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneLoan = async (id) => {
  try {
    const query =
      "SELECT l.id_loan, l.loan_date, l.end_date, l.return_date, u.name, u.last_names, b.title FROM loans l " +
      "INNER JOIN users u ON l.id_user = u.id_user INNER JOIN books b ON l.id_book = b.id_book WHERE l.id_loan = ?";
    const responseGet = await pool.query(query, [id]);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewLoan = async (
  id_book,
  id_user,
  loan_date,
  end_date,
  return_date
) => {
  try {
    const query =
      "INSERT INTO loans(id_book, id_user, loan_date, end_date, return_date) VALUES (?,?,?,?,?)";
    const responseCreate = await pool.query(query, [
      id_book,
      id_user,
      loan_date,
      end_date,
      return_date,
    ]);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneLoan = async (
  id,
  id_book,
  id_user,
  loan_date,
  end_date,
  return_date
) => {
  try {
    const query =
      "UPDATE loans SET id_book=?, id_user=?, loan_date=?, end_date=?, return_date=?, updatedAt=NOW() WHERE id_loan = ?";
    const responseUpdate = await pool.query(query, [
      id_book,
      id_user,
      loan_date,
      end_date,
      return_date,
      id,
    ]);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneLoan = async (id) => {
  try {
    const query = "DELETE FROM loans WHERE id_loan = ?";
    const responseDelete = await pool.query(query, [id]);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

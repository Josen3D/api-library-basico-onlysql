// import pool from database/mysql.js
import { pool } from "../database/mysql.js";

export const getAllBooks = async () => {
  try {
    const query = "SELECT * FROM books";
    const responseGet = await pool.query(query);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneBook = async (id) => {
  try {
    const query = "SELECT * FROM books WHERE id_book = ?";
    const responseGet = await pool.query(query, [id]);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewBook = async (
  title,
  editorial,
  author,
  genre,
  author_country,
  no_pages,
  edition_year,
  price
) => {
  try {
    const query =
      "INSERT INTO books(title, editorial, author, genre, author_country, no_pages, edition_year, price) VALUES (?,?,?,?,?,?,?,?)";
    const responseCreate = await pool.query(query, [
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price,
    ]);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneBook = async (
  id,
  title,
  editorial,
  author,
  genre,
  author_country,
  no_pages,
  edition_year,
  price,
) => {
  try {
    const query =
      "UPDATE books SET title=?, editorial=?, author=?, genre=?, author_country=?, no_pages=?, edition_year=?, price=?, updatedAt=NOW() WHERE id_book = ?";
    const responseUpdate = await pool.query(query, [
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price,
      id,
    ]);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneBook = async (id) => {
  try {
    const query = "DELETE FROM books WHERE id_book = ?";
    const responseDelete = await pool.query(query, [id]);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

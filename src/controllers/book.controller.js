// import book service
import {
  createNewBook,
  deleteOneBook,
  getAllBooks,
  getOneBook,
  updateOneBook,
} from "../services/book.service.js";
// import matched data from express validator
import { matchedData } from "express-validator";
// import http error handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**Obtiene los registros de la DB
 *
 * @param {*} req
 * @param {*} res
 */
export const getItems = async (req, res) => {
  try {
    const [response] = await getAllBooks();
    res.status(200).json({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS: " + error);
  }
};

/**
 * Obtiene un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const [response] = await getOneBook(id);

    if (response.length <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

/**
 * Crea un registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const {
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price,
    } = body;
    const [response] = await createNewBook(
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price
    );
    res.status(201).json({
      id: response.insertId,
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price,
    });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);

    const {
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price,
    } = body;
    const [response] = await updateOneBook(
      id,
      title,
      editorial,
      author,
      genre,
      author_country,
      no_pages,
      edition_year,
      price
    );

    if (response.affectedRows === 0) {
      handleHttpError(res, "ITEM_NOT_FOUNT", 404);
      return;
    }

    const [book] = await getOneBook(id);
    res.status(200).json(book[0]);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM: " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const [response] = await deleteOneBook(id);

    if (response.affectedRows <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({message: "item deleted"});
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

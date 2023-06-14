// import book service
import {
  getAllLoans,
  getOneLoan,
  createNewLoan,
  updateOneLoan,
  deleteOneLoan,
} from "../services/loan.service.js";
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
    const [response] = await getAllLoans();
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
    const [response] = await getOneLoan(id);

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
    const { id_book, id_user, loan_date, end_date, return_date } = body;

    const [response] = await createNewLoan(
      id_book,
      id_user,
      loan_date,
      end_date,
      return_date
    );
    res.status(201).json({
      id: response.insertId,
      id_book,
      id_user,
      loan_date,
      end_date,
      return_date,
    });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);

    const { id_book, id_user, loan_date, end_date, return_date } = body;
    const [response] = await updateOneLoan(
      id,
      id_book,
      id_user,
      loan_date,
      end_date,
      return_date
    );

    if (response.affectedRows === 0) {
      handleHttpError(res, "ITEM_NOT_FOUNT", 404);
      return;
    }

    const [loan] = await getOneLoan(id);
    res.status(200).json(loan[0]);
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
    const [response] = await deleteOneLoan(id);

    if (response.affectedRows <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({ message: "item deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

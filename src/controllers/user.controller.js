// import book service
import {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
} from "../services/user.service.js";
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
    const [response] = await getAllUsers();
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
    const [response] = await getOneUser(id);

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
    const { name, last_names, dni, residence, town, province, birthdate } = body;

    const [response] = await createNewUser(
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate
    );
    res.status(201).json({
      id: response.insertId,
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate,
    });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);

    const {
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate,
    } = body;
    const [response] = await updateOneUser(
      id,
      name,
      last_names,
      dni,
      residence,
      town,
      province,
      birthdate,
    );

    if (response.affectedRows === 0) {
      handleHttpError(res, "ITEM_NOT_FOUNT", 404);
      return;
    }

    const [user] = await getOneUser(id);
    res.status(200).json(user[0]);
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
    const [response] = await deleteOneUser(id);

    if (response.affectedRows <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({ message: "item deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

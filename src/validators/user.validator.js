// import check from express validator
import { check } from "express-validator";
// import validateResult from utils/validate.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createUser
export const validatorCreateUser = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("last_names").exists().notEmpty().isLength({ min: 3, max: 25 }),
  check("dni").exists().notEmpty().isLength({ min: 12, max: 12 }),
  check("residence").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("town").exists().notEmpty().isLength({ min: 3, max: 30 }),
  check("province").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("birthdate").exists().notEmpty().isDate(),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validator for getUser
export const validatorGetUser = [
  check("id").exists().notEmpty(),

  // validates the result of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

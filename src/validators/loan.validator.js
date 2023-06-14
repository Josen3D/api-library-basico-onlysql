// import check from express validator
import { check } from "express-validator";
// import validateResult from utils/validate.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createLoan
export const validatorCreateLoan = [
  check("id_book").exists().notEmpty(),
  check("id_user").exists().notEmpty(),
  check("loan_date").exists().notEmpty().isDate(),
  check("end_date").exists().notEmpty().isDate(),
  check("return_date").exists().notEmpty().isDate(),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validator for getLoan
export const validatorGetLoan = [
  check("id").exists().notEmpty(),

  // validates the result of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

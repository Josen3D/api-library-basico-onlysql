// import check from express validator
import { check } from "express-validator";
// import validateResult from utils/validate.handler.js
import {validateResult} from "../utils/validator.handler.js"

// create validators for createBook
export const validatorCreateBook = [
    check("title").exists().notEmpty().isLength({ min: 3, max: 60 }),
    check("editorial").exists().notEmpty().isLength({ min: 3, max: 25 }),
    check("author").exists().notEmpty().isLength({ min: 3, max: 25 }),
    check("genre").exists().notEmpty().isLength({ min: 3, max: 20 }),
    check("author_country").exists().notEmpty().isLength({ min: 3, max: 20 }),
    check("no_pages").exists().notEmpty().isNumeric(),
    check("edition_year")
      .exists()
      .notEmpty()
      .isNumeric()
      .isLength({ min: 4, max: 4 }),
    check("price").exists().notEmpty().isDecimal().isNumeric(),
  
    // validates the results of data
    (req, res, next) => {
      return validateResult(req, res, next);
    },
  ];
  
  // create validator for getBooks
  export const validatorGetBooks = [
    check("id").exists().notEmpty(),
  
    // validates the result of data
    (req, res, next) => {
      return validateResult(req, res, next);
    },
  ];
  
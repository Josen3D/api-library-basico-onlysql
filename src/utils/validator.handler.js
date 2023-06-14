// import validationResult from express validator
import { validationResult } from "express-validator";

// validates if data results are correct
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

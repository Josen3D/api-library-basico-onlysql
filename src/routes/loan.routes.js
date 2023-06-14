// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/loan.controller.js";
// import book validators
import {
  validatorGetLoan,
  validatorCreateLoan,
} from "../validators/loan.validator.js";
// create the router
const router = Router();

// create the routes
router
  .get("/loans", getItems)
  .get("/loans/:id", validatorGetLoan, getItem)
  .post("/loans", validatorCreateLoan, createItem)
  .put("/loans/:id", validatorGetLoan, validatorCreateLoan, updateItem)
  .delete("/loans/:id", validatorGetLoan, deleteItem);

// export the router
export default router;

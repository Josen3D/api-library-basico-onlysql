// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/book.controller.js";
// import book validators
import {
  validatorGetBooks,
  validatorCreateBook,
} from "../validators/book.validator.js";
// create the router
const router = Router();

// create the routes
router
  .get("/books", getItems)
  .get("/books/:id", validatorGetBooks, getItem)
  .post("/books", validatorCreateBook, createItem)
  .put("/books/:id", validatorGetBooks, validatorCreateBook, updateItem)
  .delete("/books/:id", validatorGetBooks, deleteItem);

// export the router
export default router;

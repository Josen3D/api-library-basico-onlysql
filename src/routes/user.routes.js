// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/user.controller.js";
// import book validators
import {
  validatorGetUser,
  validatorCreateUser,
} from "../validators/user.validator.js";
// create the router
const router = Router();

// create the routes
router
  .get("/users", getItems)
  .get("/users/:id", validatorGetUser, getItem)
  .post("/users", validatorCreateUser, createItem)
  .put("/users/:id", validatorGetUser, validatorCreateUser, updateItem)
  .delete("/users/:id", validatorGetUser, deleteItem);

// export the router
export default router;

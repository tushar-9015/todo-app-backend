import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", (req, res) => {
  console.log(req.url);
  getTodo(req, res);
});
router.post("/todos/create", (req, res) => {
  console.log(req);
  createTodo(req, res);
});
router.delete("/todos/:id", deleteTodo);
router.patch("/todos/update/:id", updateTodo);

export default router;

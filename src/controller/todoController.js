import { Todo } from "../model/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(200).json(allTodo);
  } catch (error) {
    res.status(400).json(`something went wrong: ${error}`);
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(201).json("no todo has been found");
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(`something went wrong: ${error}`);
  }
};

const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(401).json(`Error occured while creating the todo: ${error}`);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    let todo = await Todo.findById(todoId);

    if (!todo) return res.status(200).json("no todo found!");

    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.isCompleted = req.body.isCompleted || todo.isCompleted;
    todo.isArchived = req.body.isArchived || todo.isArchived;
    todo.modifiedAt = req.body.modifiedAt;

    await todo.save();
    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(401).json(`Error occured while updating the todo: ${error}`);
  }
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(201).json("todo has been deleted");
};

export { getTodo, getTodos, createTodo, updateTodo, deleteTodo };

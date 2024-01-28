const getTest = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(200).json(allTodo);
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

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// In-memory database for todos
let todos = [
  {id: 1, text: 'First Item', done: false},
  {id: 2, text: 'Second Item', done: false},
  {id: 3, text: 'Third Item', done: false},
];

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// REST API

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Get a single todo by ID
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

// Create a new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send("Text is required");
  const todo = {
    id: todos.length + 1,
    text,
    done: false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a todo by ID
app.put("/api/todos/:id", (req, res) => {
  const { text, done } = req.body;
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");

  if (text !== undefined) todo.text = text;
  if (done !== undefined) todo.done = done;

  res.json(todo);
});

// Delete a todo by ID
app.delete("/api/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send("Todo not found");

  todos.splice(todoIndex, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In‑memory data store
let todos = [];       // [{ id: 1, title: 'Learn RTK', completed: false }, ...]
let nextId = 1;       // simple incremental id

// 🔍 Read all
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// ➕ Create
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  console.log(req.body,"eeee");
  
  console.log(todos,"qqqqq");
  
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTodo = { id: nextId++, title, completed: false };
  todos.unshift(newTodo);
  res.status(201).json(newTodo);
});

// ✏️ Update
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const idx = todos.findIndex(t => t.id === Number(id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });

  // Only allow updating title & completed
  const { title, completed } = req.body;
  if (title !== undefined) todos[idx].title = title;
  if (completed !== undefined) todos[idx].completed = completed;
  res.json(todos[idx]);
});

// 🗑️ Delete
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== Number(id));
  res.json({ message: 'Deleted' });
});

// 🚀 Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

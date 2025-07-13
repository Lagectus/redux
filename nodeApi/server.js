const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In‑memory data store
let todos = [];       // [{ id: 1, title: 'Learn RTK', completed: false }, ...]
let nextId = 1;       // simple incremental id

// 🔍 Read all

app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
}
);
app.get('/api/tasks', (req, res) => {
   req.params  // { _limit: '5' }
  //  function getData(){
  //   return todos.slice(0, Number(req.query._limit) || todos.length);
  //  }
  res.json(todos);
});

// ➕ Create
app.post('/api/tasks', (req, res) => {
  const { value } = req.body;
  console.log(req.body,"eeee");
  
  console.log(todos,"qqqqq");
  
  if (!value) return res.status(400).json({ error: 'Title is required' });

  const newTodo = { id: nextId++, value, completed: false };
  todos.unshift(newTodo);
  res.json(newTodo);
});

// ✏️ Update
app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  console.log(id,"iddd");
  
  const idx = todos.findIndex(t => t.id === Number(id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });

  // Only allow updating title & completed
  const { title, completed } = req.body;
  if (title !== undefined) todos[idx].title = title;
  if (completed !== undefined) todos[idx].completed = completed;
  res.json(todos[idx]);
});

// 🗑️ Delete
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== Number(id));
  res.json({ message: 'Deleted' });
});

// 🚀 Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
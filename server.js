const express = require('express');

const app = express();

const { notes } = require('./db/db');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
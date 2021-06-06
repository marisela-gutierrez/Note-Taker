const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
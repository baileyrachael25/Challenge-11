//imports
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const fs = require('fs');
const routes = require('./routes/index');

//initialize express
const app = express();
const PORT = process.env.PORT || 3001;

//middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import custom middleware, "cLog"
app.use(clog);

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

//listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
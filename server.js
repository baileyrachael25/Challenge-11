const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');

//initialize express
const app = express();
const PORT = process.env.PORT || 3001;

//middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
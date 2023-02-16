// adds dependencies
const express = require('express');
const routes = require('./routes/html.js');

// builds express app
const app = express();

// builds a port
const PORT = process.env.PORT || 3000;

// connects server to routes
app.use(routes);

// starts server using port
app.listen(PORT, function () {console.log(`Listening on PORT: ${PORT}`)});
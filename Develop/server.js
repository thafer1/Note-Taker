// adds dependencies
const express = require('express');

// builds express app
const app = express();

// builds a port
const PORT = process.env.PORT || 3000;

// starts server using port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
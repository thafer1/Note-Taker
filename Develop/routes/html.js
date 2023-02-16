// provides dependencies and utilities for working with file and directory paths
const express = require("express");
const path = require('path');
const router = express.Router();

// returns note.html file
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

// returns index.html file
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  module.exports = router;
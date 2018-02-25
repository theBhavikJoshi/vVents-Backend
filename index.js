const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./keys');

mongoose.connect(keys.MONGOURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
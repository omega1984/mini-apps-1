// express app

var express = require('express');
var app = express();


app.use(express.static(path.join(__dirname, './client')));
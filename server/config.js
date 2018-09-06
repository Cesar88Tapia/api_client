const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));


//Get request
app.get('/user', route.getUser);


//Post request
app.post('/user', route.postUsers);


module.exports = app;

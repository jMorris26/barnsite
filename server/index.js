'use strict';

require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    logger = require('morgan');

var submit = require('./routes/submit');

var app = express();
var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', submit);

app.listen(port, function(){
  console.log('Server running on ' + port);
});

module.exports = app;

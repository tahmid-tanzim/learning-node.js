var http = require('http');
var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.end('Welcome to Airline');
});

http.createServer(app).listen(3000, 'localhost');
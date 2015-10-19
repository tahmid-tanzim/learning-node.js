#!/usr/bin/env node

var http = require('http');
var flights = require('./data');
var db = require('./db');
var argv = require('minimist')(process.argv.slice(2));
var app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

if (argv.flight && argv.destination) {
    flights[argv.flight].data.destination = argv.destination;
}
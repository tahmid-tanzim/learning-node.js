var http = require('http');
var flights = require('./data');
var db = require('./db');
var repl = require('repl');
var app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

var prompt =  repl.start({prompt: 'flights> '});
prompt.context.data = flights;
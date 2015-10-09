var http = require('http');

var handleRequest = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome to NodeJS');
};

var server = http.createServer(handleRequest);

server.listen(3000, 'localhost');
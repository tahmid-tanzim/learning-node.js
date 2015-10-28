/**
 * Note: 'fs' is a core module to deal with File System.
 * Terminal 1: node tcp.js
 * Terminal 2: telnet localhost 7777
 * Escape character is 'Ctrl+]'
 * Type 'quit'
 * */
var net = require('net');
var fileSystem = require('fs');

var server = net.createServer(function (connect) {
    var log = fileSystem.createWriteStream('./log/development.log');
    console.log('Connection established');

    connect.on('end', function () {
        console.log('Connection ended');
    });

    connect.write("Log one\r\n");
    connect.write("Log two\r\n");
    connect.write("Log three\r\n");

    connect.pipe(connect).pipe(log);
});

server.listen(7777, function () {
    console.log('Server ready on port 7777');
});
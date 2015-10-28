/**
 * Note: 'fs' is a core module to deal with File System.
 * */
var fileSystem = require('fs');
var stream = fileSystem.createReadStream('./data/flights.json');
var writable = fileSystem.createWriteStream('./data/copy-flights.json');

stream.pipe(process.stdout);
stream.pipe(writable);

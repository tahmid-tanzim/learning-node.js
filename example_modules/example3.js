/**
 * $ node example3.js
 *
 * OUTPUT ~>
 * speaking: We have extra seats available.
 * SPEAKING: All seats SOLD OUT.
 * */
var speak = require('./speak');
speak.softly('We have extra seats available.');
speak.loudly('All seats SOLD OUT.');
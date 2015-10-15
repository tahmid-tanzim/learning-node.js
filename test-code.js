var flights = require('./data');
var flightModule = require('./flight');

for (var number in flights) {
    flights[number] = flightModule.create(flights[number])
    console.log(flights[number]);
}

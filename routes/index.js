/*
 * GET home page.
 */
var flights = require('../data');
var flightModule = require('../flight');

for (var number in flights) {
    flights[number] = flightModule.create(flights[number]);
}

exports.flight = function (req, res) {
    var number = req.param('number');

    if (typeof flights[number] === 'undefined') {
        res.status(404).json({
            status: 'error',
            message: 'Invalid flight number: ' + number
        });
    } else {
        res.json(flights[number].getInformation());
    }
};

/*
 * GET home page.
 */

var FlightSchema = require('../schemas/flight');
var Emitter = require('events').EventEmitter;

var flightEmitter = new Emitter();

flightEmitter.on('arrival', function (flight) {
    var record = new FlightSchema(flight.getInformation());
    record.save(function (err) {
        if (err) {
            console.log(err);
        }
    });
});

flightEmitter.on('arrival', function (flight) {
    console.log("Flight arrived: " + flight.data.number);
});

module.exports = function (flights) {
    var flightModule = require('../flight');

    for (var number in flights) {
        flights[number] = flightModule.create(flights[number]);
    }

    var functions = {
        flight: function (req, res) {
            var number = req.param('number');

            if (typeof flights[number] === 'undefined') {
                req.session.lastNumber = null;
                res.status(404).json({
                    status: 'Error',
                    message: 'Invalid flight number: ' + number
                });
            } else {
                req.session.lastNumber = number;
                res.json(flights[number].getInformation());
            }
        },
        arrived: function (req, res) {
            var number = req.param('number');

            if (typeof flights[number] === 'undefined') {
                res.status(404).json({
                    status: 'Error',
                    message: 'Invalid flight number: ' + number
                });
            } else {
                flights[number].triggerArrive();

                flightEmitter.emit('arrival', flights[number]);
                res.json({
                    status: 'Successfully arrived',
                    info: flights[number].getInformation()
                });

                /**
                 * Resolved record save by emitting events.
                 * */
                //var record = new FlightSchema(flights[number].getInformation());
                //record.save(function (err) {
                //    if (err) {
                //        console.log(err);
                //        res.status(500).json({status: 'Database failure'});
                //    } else {
                //        res.json({
                //            status: 'Successfully arrived',
                //            info: flights[number].getInformation()
                //        });
                //    }
                //});
            }
        },
        list: function (req, res) {
            res.render('list', {
                title: 'All Flights',
                flights: flights
            });
        },
        listjson: function (req, res) {
            var flightData = [];
            for (var number in flights) {
                flightData.push(flights[number].getInformation());
            }
            res.json(flightData);
        },
        arrivals: function (req, res) {
            FlightSchema.find()
                .setOptions({sort: 'actualArrive'})
                .exec(function (err, data) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({status: 'Database failure'});
                    } else {
                        res.render('arrivals', {
                            title: 'Arrivals',
                            arrivals: data,
                            lastNumber: req.session.lastNumber
                        });
                    }
                });

        },
        login: function (req, res) {
            res.render('login', {title: 'Log in'});
        },
        user: function (req, res) {
            if (req.session.passport.user === undefined) {
                res.redirect('/login');
            } else {
                res.render('user', {
                    title: 'Welcome!',
                    user: req.user
                });
            }
        }
    };
    return functions;
};
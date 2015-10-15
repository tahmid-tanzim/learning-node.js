module.exports = function (info) {
    var values = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive: null
    };

    for (var prop in values) {
        if(values[prop] !== 'undefined') {
            values[prop] = info[prop];
        }
    }

    var functions = {
        triggerDepart: function () {
            values.actualDepart = Date.now();
        },
        triggerArrive: function () {
            values.actualArrive = Date.now();
        },
        getInformation: function () {
            return values;
        }
    };

    return functions;
};

/*
var number, origin, destination;

exports.setNumber = function (n) {
    number = n;
};

exports.setOrigin = function (o) {
    origin = o;
};

exports.setDestination = function (d) {
    destination = d;
};

exports.getInfo = function () {
    return {
        number: number,
        origin: origin,
        destination: destination
    };
};
*/
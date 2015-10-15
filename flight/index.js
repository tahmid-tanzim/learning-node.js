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
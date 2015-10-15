var flight = require('./flight');

var pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
};

var pl = flight.create(pdxlax);
pl.triggerDepart();

console.log(pl.getInformation());
console.log(flight.getFlightsInfo());
console.log('/*****************************************************/');

var ausdca = {
    number: 382,
    origin: 'AUS',
    destination: 'DCA'
};

var ad = flight.create(ausdca);

console.log(ad.getInformation());
console.log(pl.getInformation());
console.log(flight.getFlightsInfo());
console.log('/*****************************************************/');

var bansng = {
    number: 469,
    origin: 'BAN',
    destination: 'SNG'
};

var bs = flight.create(bansng);
console.log(bs.getInformation());
console.log(ad.getInformation());
console.log(pl.getInformation());
console.log(flight.getFlightsInfo());
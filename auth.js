var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function (username, password, done) {
    if(username === 'admin' && password === '12345') {
        return done(null, {username: 'admin'});
    } else {
        return done(null, false);
    }
}));

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    done(null, {username: username});
});

module.exports = passport;

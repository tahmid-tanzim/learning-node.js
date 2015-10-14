var whisper = function (message) {
    console.log('speaking: ' + message);
};

exports.softly = whisper;

exports.loudly = function (message) {
    console.log('SPEAKING: ' + message);
}
var exec = require('cordova/exec');

exports.isJailbroken = function(arg0, success, error) {
    exec(success, error, "SMADP", "isJailbroken", [arg0]);
};

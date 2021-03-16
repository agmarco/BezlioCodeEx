const fs = require('fs');

//makes it easier to load the file and turn it into a js object
module.exports = function readJsonFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, res) {
            if (err) {
                reject("couldn't read the file");
            }
            resolve(JSON.parse(res));
        });
    });
}
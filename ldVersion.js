const fs = require('fs');
const _ = require('lodash');
(async () => {
    try {
        const [file1, file2] = await Promise.all([
            fs.promises.readFile('fileOne.json'),
            fs.promises.readFile('fileTwo.json')]);
        const fileContents1 = JSON.parse(file1);
        const fileContents2 = JSON.parse(file2);
        const merged = _.merge({}, fileContents1, fileContents2 );
        const output = JSON.stringify(merged);
        fs.promises.writeFile('ld-output.json', output);
        console.log('data written', output);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}) ();
const fs = require('fs');
const readJsonFile = require('./readJsonFile');

(async () => {
    try {
        const [file1, file2] = await Promise.all([
            readJsonFile('input/fileOne.json'),
            readJsonFile('input/fileTwo.json')]);
        const merged = { ...file1, ...file2 };
        const output = JSON.stringify(merged);
        fs.promises.writeFile('output/output.json', output);
        console.log('data written', output);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
})();

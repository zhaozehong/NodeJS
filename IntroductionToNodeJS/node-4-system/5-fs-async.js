var fs = require('fs');

if (fs.existsSync('temp')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function (error) {
    fs.exists('temp', function (exists) {
        if (exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'This is some test text for the file', function (error) {
                fs.rename('test.txt', 'new.txt', function (error) {
                    fs.stat('new.txt', function (error, stats) {
                        console.log('File has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function (error, data) {
                            console.log('File contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    });
});

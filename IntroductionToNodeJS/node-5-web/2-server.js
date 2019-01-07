var fs = require('fs');

var http = require('http');
http.createServer(function (req, res) { // the function will be invoked on each request
    // '200' is the status code
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/file.txt') {
        // __dirname is telling the directory that the current script is running in  
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
        res.end('Hello World');
    }
}).listen(process.env.PORT, process.env.IP);
console.log('Server is running!');
console.log(process.env.IP);
console.log(process.env.PORT);
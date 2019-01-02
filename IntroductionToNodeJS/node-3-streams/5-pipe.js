var request = require('request');

// way 1 of piping to console
//var s = request('http://www.pluralsight.com/');
//s.pipe(process.stdout);

// way 2 of piping to console
//request('http://www.pluralsight.com/').pipe(process.stdout); // pipe it to console

// pipe to a file
var fs = require('fs');
//request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html')); // pipe it to a file through file system

var zlib = require('zlib');
request('http://www.pluralsight.com/').pipe(zlib.createGzip().pipe(fs.createWriteStream('pluralsight.html.gz'))); // pipe it to a file through file system

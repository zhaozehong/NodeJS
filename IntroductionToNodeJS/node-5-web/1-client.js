var http = require('http');

var option = {
    host: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Going to make request...');

/* var req = http.request('http://www.baidu.com/', function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
}); 
req.end();*/

/* var req = http.request(option, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
req.end(); // to close the writable stream  */

// get method doesn't have to close the stream
http.get(option, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
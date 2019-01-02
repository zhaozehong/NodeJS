var request = require('request');

var s = request('http://www.pluralsight.com/'); // this will return a stream

s.on('data', function(chuck){
    console.log('>>>Data>>> ' + chuck);
});

s.on('end', function(){
    console.log('>>>Done!>>>');
});
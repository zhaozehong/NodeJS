var mathfun = require('./mathfun'); // './' means look at current directory and find mathfun.js
var os = require('os');

var processResults = function (err, results, time) {
    if (err) {
        console.log('ERROR: ' + err.message);
    } else {
        console.log('The results are: ' + results + '(' + time + 'ms)');
    }
};
for (var i = 0; i < 10; i++){
    console.log('Calling "evenDoubler" with paramter "' +i +'"' );
    mathfun.evenDoubler(i, processResults);
}
console.log('-----');
console.log('The "foo" variable from module "mathfun" = ' + mathfun.foo);
console.log('The "maxtime" variable is not exported: ' + mathfun.maxTime);
console.log(os.EOL);

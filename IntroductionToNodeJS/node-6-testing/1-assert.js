var assert = require('assert');
var fun = require('./mathfun');

assert.equal(fun.evenDoublerSync(2), 4);
assert.throws(function () {
    fun.evenDoublerSync(3);
}, /Odd/);

fun.evenDoubler(2, function (err, results) {
    assert.ifError(err);
    assert.equal(results, 5, 'evenDoubler failed on even number');
});

fun.evenDoubler(2, function (err, results) {
    assert.notEqual(err, null);
});
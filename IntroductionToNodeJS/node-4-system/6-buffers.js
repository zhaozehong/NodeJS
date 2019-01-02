var b = Buffer.from('Hello');

console.log(b.toString());
console.log(b.toString('base64'));

var v = Buffer.from('World').toString('base64');
console.log(b.toString('utf-8', 0, 2));
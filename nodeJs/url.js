const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.port =4000;

console.log(myURL);
console.log(myURL.href)


const querystring = require('node:querystring');

console.log(querystring.decode(myURL.href));

// Assuming gbkDecodeURIComponent function already exists...

console.log(
    querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));




console.log(process.env.NODE_ENV);
process.env.NODE_ENV='development';
console.log(process.env.NODE_ENV);
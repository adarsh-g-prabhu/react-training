const path=require('node:path')
const os=require('node:os')
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));


console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'))

console.log(path.win32.basename('C:\\foo.HTML', '.html'))

console.log(path.extname('index.html'))


console.log(os.cpus());

console.log(os.type(), os.version());
console.log(os.uptime());

console.log('\nos:',os.type(),
    '\nrelease:',os.release(),
    '\ntotal memory',os.totalmem(),
    '\nfree memory',os.freemem());







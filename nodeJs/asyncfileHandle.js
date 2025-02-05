const fs = require('node:fs');
function readingFile() {
  try {
    const data = fs.readFileSync('./hi.txt', 'utf-8');
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}
readingFile()
console.log('me first');

console.log('\n');
const fs1 = require('node:fs/promises');
async function readingFile1() {
  try {
    const data = await fs1.readFile('./hi.txt', 'utf-8');
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}
readingFile1()
console.log('me first');






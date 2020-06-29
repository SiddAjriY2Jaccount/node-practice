const fs = require('fs');

const readStream = fs.createReadStream('./sample-txt/file.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./sample-txt/file1.txt');

//readStream.on('data', (chunk) => {
//  console.log('-------new chunk-----');
//  console.log(chunk);
//  writeStream.write('\n ======= new chunk write ========');
//  writeStream.write(chunk);
//});

////// piping
readStream.pipe(writeStream);

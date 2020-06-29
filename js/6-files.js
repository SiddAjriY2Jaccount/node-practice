const fs = require('fs');

//////////////// read files

//fs.readFile('./sample-txt/file.txt', (err, data) => {
//  if (err){
//    console.log(err);
//  }
//  console.log(data.toString());
//});
//
//console.log('last line??')  // shows readFile is an async function

//////////////// write files
//fs.writeFile('./sample-txt/file2.txt', 'hello again to rewatch', () => {
//  console.log('wrote new file');
//});

//////////////// creating directories
//if (!fs.existsSync('./assets')) {
//  fs.mkdir('./assets', (err) => {         // fs.rmdir -> to remove
//    if (err) {
//      console.log(err);
//    }
//    console.log('folder created')
//  });
//
//}


//////////////// deleting files
//if (fs.existsSync('./sample-txt/deleteme.txt')) {
//  fs.unlink('./sample-txt/deleteme.txt', (err) => {
//    if (err) {
//      console.log(err);
//    }
//    console.log('deleted');
//  });
//}

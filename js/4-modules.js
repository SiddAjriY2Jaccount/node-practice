const importer = require('./people');

console.log(importer); // empty object rn -> since we don't export the list from people.js, changing people.js will change it

console.log(importer.people, importer.ages);

const { people } = require('./people');
console.log(people, importer.ages);


const os = require('os');
console.log(os.platform(), os.homedir());

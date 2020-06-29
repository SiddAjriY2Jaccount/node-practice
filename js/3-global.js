// Global object

setTimeout(() => {
  console.log('in timeout');
  clearInterval(m); //must specify 'm'
}, 3000);

const m = setInterval(() => {
  console.log('in interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

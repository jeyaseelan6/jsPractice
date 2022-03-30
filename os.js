const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory is " + totalMemory);
console.log("Free Memory is " + freeMemory);

// ithu normal concadinations java la padicathu pola
// ana js la ES6 la Template string endu solli ondu iruku
// `${totalMemory} is available

console.log(`Total Memory is ${totalMemory}`);
console.log(`Free Memory is ${freeMemory}`);
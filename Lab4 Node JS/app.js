console.log("Hello World")

const os =require('os');

console.log('Architecture ' + os.arch());
console.log('CPU s ' + os.cpus().length);
console.log('OS ' + os.platform());

// const totalMemory = os.totalMem();
// const freeMemory = os.freeMem();
//
// print(`Total Memory = ${totalMemory} , Free Memory = ${freeMemory}`);

// const fs = require('fs');
// const fileName =  __dirname + '/text.txt';
//
// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log(data.toString());
// });
//
// const file = fs.readFile(fileName);
// console.log(file);
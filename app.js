// //synchronous
// //javascript runs top to bottom
// console.log("I ");
// console.log("eat ");
// console.log("spoon ");
// console.log("Ice cream ");
// console.log("with ");

//Asynchrnouns
console.log("I ");
console.log("eat ");
setTimeout(()=>{
    console.log("Ice cream ");
},4000)  // this is asynchronous call, separated somewhere and released after 4 seconds
console.log("with ");
console.log("spoon ");





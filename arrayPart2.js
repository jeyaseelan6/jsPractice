// function isEven(element){
//     return element % 2 === 0;
// }


// var isEven = (element) =>{
//     return element % 2 === 0;
// }


var isEven = (element)=> element % 2 === 0;
//
// var result = [2,4,6,7].every(isEven); // everything is even
// console.log(result)

var result = [2, 4, 6 ,8].every((e)=> (e % 2 === 0));
console.log(result);
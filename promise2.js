const uno = () =>{
    return "I am One";
};
//
// const dos = () =>{
//     setTimeout(()=> {
//         return "I am two";
//     },3000);
// };

const dos = () =>{
    return new Promise((resolve,reject)=>{

    })
}
const tres = ()=>{
    return "I am three";
};

const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}



callMe();
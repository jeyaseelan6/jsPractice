// function one(){
//     console.log("Step 1");
// }
//
// function two(){
//     console.log("Step 2");
// }
//
// one();
// two();
// setTimeout(()=>{
//     two()
// },3000);

function one(call_two){
    console.log("Step 1 completed, please call step 2");
    call_two();
}

function two(){
    console.log("step 2");
}

one(two);
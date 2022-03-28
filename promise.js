let stocks = {
    Fruits : ['strawberry','grapes','banana','apple'],
    liquid : ['water','ice'],
    holder : ["cone","cup",'stick'],
    toppings : ["chocolate","peanuts"]
}

let is_shop_open = true;

let order = (time,work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open){
        setTimeout(()=>{
            resolve(work()); // success part
        },time);
        }
        else{
            reject (console.log("our shop is closed")); // rejection part
        }
    });
};

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
//then will happen promise is resolved and sequentially
.then(()=>{
    return order(0,()=>console.log("Production has started"));
})

.then(()=>{
    return order(2000,()=> console.log("The fruit was choped"));
})

.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})

.then(()=>{
    return order(1000,()=>console.log("Start the machine"))
})

.then(()=>{
    return order(2000,()=>{
        console.log(`Ice cream placed on ${stocks.holder[0]}`)
    })
})

.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} was selected`)
    })
})

.then(()=>{
    return order(2000,()=>console.log('Ice cream served'))
})

//catch will happen when promise is rejected
.catch(()=>{
    console.log("Customer left")
})

//dont place a semicolon here if there is more continuation code
//finally will be called anyway promise is resolved or rejected

.finally(()=>{
    console.log("Day ended , shop is closed")
})
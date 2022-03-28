let stocks = {
    Fruits : ['strawberry','grapes','banana','apple'],
    liquid : ['water','ice'],
    holder : ["cone","cup",'stick'],
    toppings : ["chocolate","peanuts"]
}

let is_shop_open = true;

let topping_choice = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("Which topping would you love? ")
            )
        },3000)
    });
};

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await topping_choice() // chef is outside the kitchen and asking the customer, nothing is happening in kitchen

    console.log(" D ")
    console.log(" E ")

//have to go outside from the kitchen ask the customer what do you want?

}

kitchen();

console.log("doing the dishes")
console.log("Cleaning the tables")
console.log("taking others orders")
let stocks = {
    Fruits : ['strawberry','grapes','banana','apple'],
    liquid : ['water','ice'],
    holder : ["cone","cup",'stick'],
    toppings : ["chocolate","peanuts"]
}

let order = (Fruit_name,call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)

    call_production();
},2000);
};

let production = () =>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log("Fruit has been choped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(()=>{
                    console.log("The machine was started")

                    setTimeout(()=>{
                        console.log(`Ice cream was placed on ${stocks.holder[0]} `)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added`)

                            setTimeout(()=>{
                                console.log("Serve ice cream")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },)
};

order("0", production);
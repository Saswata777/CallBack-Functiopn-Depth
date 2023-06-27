// Example one
console.log("HTML");
console.log("CSS");
console.log("Java Script");
// Every thing happening one after another

// Example 2
console.log(" ");

console.log("HTML");
setTimeout(function(){
    console.log("CSS");
},5000)
console.log("Java Script");


const cart =["T-shirt","Laptop","Bag","Mobile"]

api.createOrder(cart, function(){
    api.proceedPayment(function (){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })

})
 // The above code is call-back hell  as here we can see Pyramid of DOOM in this code
 //  Pyramid of doom -   A programming anti-pattern where nested callbacks or if statements create code that is difficult to read, maintain, and understand.



// Inversion Controll
// you loose back your control in codes when you use call Back

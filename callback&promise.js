const flavourInStock = ["chocolate", "butterscotch", "blackforest", "vanilla"];

// using callbacks:

// function cakeShop(flavour, orderCake, cancelOrder){
// if(!flavourInStock.includes(flavour)){
//     cancelOrder( "Flavour not in stock")
// }
// else{
//     orderCake("Your cake is ordered successfully")
// }
// }

// cakeShop("chocolate",message=>{
//     console.log(message);
// }, error=>{
//     console.log(error);
// });

//////////////////////////////////////////////////////////////////

 // using promise:

function cakeShop(flavour){
   return new Promise((resolve, reject)=>{
if(!flavourInStock.includes(flavour)){
    reject( "Flavour not in stock")
}
else{
    resolve("Your cake is ordered successfully")
 }
 }) 
}
cakeShop("vanilla")
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
});
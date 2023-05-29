let cartItems=["Paint","shirt","jeans","T-shirt","Paint","shirt","jeans"];//accidentally add the same item more than once


//remove duplicate items from the customer's cart.
function removeDuplicateItems(arr){
    return new Set(arr);
}


let result=removeDuplicateItems(cartItems);
console.log([...result]);
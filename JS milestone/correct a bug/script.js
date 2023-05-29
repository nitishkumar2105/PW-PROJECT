let cart = [1, 2, 3];

let newAddItemQty = 4;

cart.push(newAddItemQty); //add new item quantity

//Code for fix cart Bug

function fixCartBug(arr) {
  cart = arr.map((el) => el * 2);
  return cart;
}

fixCartBug(cart);

console.log(cart);
let x = 5;
let y = 10;

//Code for swap the values of two variables.
function swapOperation(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

[x, y] = swapOperation(x, y);

console.log(`Value of x:${x} and y:${y} `)
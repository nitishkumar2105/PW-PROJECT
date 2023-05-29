
const arr = [1, 2, 3, 4, 5];

//Function returns another function

function numberChecker(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

const checkNum = numberChecker(arr);

console.log(checkNum(3));
console.log(checkNum(8));
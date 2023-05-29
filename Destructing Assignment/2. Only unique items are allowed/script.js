const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 8, 8, 12, 11, 11,1,3,7,4,5];


// Code For Find Unique Set

function findUniqueElements(arr) {
  let uniqueSet = new Set(arr);
  return uniqueSet;
}

const result = findUniqueElements(numbers);

console.log(result);
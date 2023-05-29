const numbers = [1, 2, 3, 4, 5];

// Code extractElements
function extractElements(arr) {
  const [first, second, , , last] = arr;
  return [first, second, last];
}

const result = extractElements(numbers);

console.log(result);
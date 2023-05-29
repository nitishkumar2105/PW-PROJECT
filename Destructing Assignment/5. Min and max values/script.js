const numbers = [5, 2, 3, 1, 8, 9, 6];

//Code For Find Max And Min Value From Array

function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

const result = findMaxAndMin(numbers);
console.log(result);
// Task 2

function sumArr(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [8, 9, 5, 3, 2];
console.log(sumArr(numbers));

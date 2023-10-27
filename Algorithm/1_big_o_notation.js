/**
 * linear : f(n) = n
 * quadratic : f(n) = n^2
 * constant : f(n) = 1
 */

// Time complexity
// O(1) : Always 3 operations
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// O(n) : Number of operations is (eventually) bounded by a mutiple of n
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += 1;
  }
  return total;
}
function countUpAndDown(n) {
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // O(n)
  for (let j = n - 1; j < n; j++) {
    console.log(j);
  }
  // two for loops = eventually O(n)
}
// O(nn^2) : O(n) operation inside of an O(n) operation.
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j); // nested for loop
    }
  }
}

// Space complexity
// O(1) space
function sum(arr) {
  let total = 0; // One number
  for (let i = 0; i < arr.length; i++) {
    // another number
    total += arr[i];
  }
  return total;
}

// O(n) space
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; // n numbers
}

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans = Number.MIN_SAFE_INTEGER;
    for (const i of numbers) {
      ans = Math.max(ans, i);
    }
    if (numbers.length === 0) {
      return undefined;
    }
    return ans;
}

module.exports = findLargestElement;
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 65 + 26) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 97 + 26)) {
      str1 += str.charAt(i);
    }
  }
  for (let i = 0; i < str1.length/2; i++) {
    if (str1.charAt(i) !== str1.charAt(str1.length - 1 - i)) return false;
  }
  return true;
}

module.exports = isPalindrome;

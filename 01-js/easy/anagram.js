/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

function isAnagram(str1, str2) {
  let map1 = new Map();
  let map2 = new Map();

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let s1 = str1.length;
  let s2 = str2.length;

  while (s1--) {
    if (map1.has(str1.charAt(s1))) {
      let val = map1.get(str1.charAt(s1));
      val++;
      map1.set(str1.charAt(s1), val);
    } else {
      map1.set(str1.charAt(s1), 1);
    }
  }

  while (s2--) {
    if (map2.has(str2.charAt(s2))) {
      let val = map2.get(str2.charAt(s2));
      val++;
      map2.set(str2.charAt(s2), val);
    } else {
      map2.set(str2.charAt(s2), 1);
    }
  }

  return mapsAreEqual(map1, map2);
}

module.exports = isAnagram;

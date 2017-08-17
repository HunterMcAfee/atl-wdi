// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  var total = 0;
  for (var i = 0; i < numsArray.length; i += 1) {
    total = total + numsArray[i];
  }
  return total;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  var newArray = [];
  for (var i = 0; i < numsArray.length; i += 1) {
    if (numsArray[i] > 10) {
      newArray.push(numsArray[i]);
    }
  }
  return newArray;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  var test = true;
  for (var i = 0; i < numsArray.length; i += 1) {
    if (test === true) {
        if (numsArray[i] <= 10) {
            test = false;
      }
    }
  }
  return test;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  var newArray = [];
    for (var i = 0; i < words.length; i += 1) {
      if (words[i].length >= 5) {
        newArray.push(words[i]);
      }
    }
    return newArray;
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  var test = true;
  for (var i = 0; i < words.length; i += 1) {
    if (test === true) {
      if (words[i].charAt(0).toLowerCase() !== "a") {
        test = false;
      }
    }
  }
  return test;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  var test = true;
  for (var i = 0; i < words.length; i += 1) {
    if (words[i].charAt(0).toLowerCase() !== "b") {
        test = false;
      }
    else {
        test = true;
        break;
    }
}
  return test;
};


// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  if (n < 0) {
    return null;
  } else {
    var counter = 0;
    for (var i = 0; i < word.length; i += 1) {
      if (word.charAt(i).toLowerCase() === "a" ||
          word.charAt(i).toLowerCase() === "e" ||
          word.charAt(i).toLowerCase() === "i" ||
          word.charAt(i).toLowerCase() === "o" ||
          word.charAt(i).toLowerCase() === "u") {
          counter = counter + 1;
          }
    }
    if (counter >= n) {
      return true;
    } else {
      return false;
    }
  }
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  var newArray = [];
  for (var i = 0; i < words.length; i +=1)
    if (hasAtLeastNVowels(words[i], 2) === true) {
      newArray.push(words[i]);
    }
  return newArray;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  var test = true;
  for (var i = 0; i < words.length; i += 1) {
    if (hasAtLeastNVowels(words[i], 2) === false) {
      test = false;
    }
  }
 return test;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  var test = false;
  for (var i = 0; i < words.length; i += 1) {
    if (hasAtLeastNVowels(words[i], 2) === true) {
      test = true;
      break;
    }
  }
 return test;
};


// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  var test = true;
  var counter = 0
  for (var i = 0; i < words.length; i += 1) {
    if (hasAtLeastNVowels(words[i], 2) === true) {
      counter = counter + 1
    }
  }
  if (counter === 0) {
    test = true;
  } else if (counter >= 1) {
    test = false;
  }
  return test;
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  var newObject = {};
  for (var i = 0; i < words.length; i += 1) {
    newObject[words[i]] = words[i].length;
  }
  return newObject;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}

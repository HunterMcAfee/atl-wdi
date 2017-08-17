// Question 1
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}

// Question 2
function maxOfThree(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        return secondNumber;
    } else {
        return thirdNumber;
    }
}

// Question 3
function isCharacterAVowel(character) {
    var lowerCharacter = character;
    lowerCharacter = lowerCharacter.toLowerCase();
    if (lowerCharacter === "a" ||
        lowerCharacter === "e" ||
        lowerCharacter === "i" ||
        lowerCharacter === "o" ||
        lowerCharacter === "u") {
            return true;
        } else {
            return false;
        }
}

// Question 4
function sumArray(inputArray) {
    var result = 0;
    for (var i = 0; i < inputArray.length; i++) {
        result += inputArray[i];
    }
    return result;
}


// Question 4
function multiplyArray(inputArray) {
    var result = inputArray[0];
    for (var i = 1; i < inputArray.length; i++) {
        result *= inputArray[i];
    }
    return result;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
var reverseString = function (string){
    reversed = string;
    reversed = reversed.split("");
    reversed = reversed.reverse();
    reversed = reversed.join("");
    reversed = reversed.toString();
    return reversed;
};


// Question 7
function findLongestWord (inputArray) {
    var winningString = "";
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > winningString.length) {
            winningString = inputArray[i];
        }
    }
    return winningString;
}

// Question 8
function filterLongWords (inputArray, number) {
    var newArray = [];
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > number) {
            newArray.push(inputArray[i])
        }
    }
    return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

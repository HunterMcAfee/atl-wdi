/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

document.getElementById("roll-dice").addEventListener("click", diceRoll);

function diceRoll (event) {
    //Generate two random numbers and assign them to variables, range of numbers should be 1-6
    var random1 = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);

    //Assign string class "dice-" with generated random number to a variable.  Convert random number to string to accomplish this.
    var firstDie = "dice-" + random1.toString();
    var secondDie = "dice-" + random2.toString();

    //Update the class of each die by pulling the element from the document using the assigned id
    document.getElementById("first-die").className = firstDie;
    document.getElementById("second-die").className = secondDie;
}



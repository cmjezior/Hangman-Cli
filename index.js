// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//
//   * Randomly selects a word and uses the `Word` constructor to store it
//
//   * Prompts the user for each guess and keeps track of the user's remaining guesses
//
// 3. `Letter.js` *should not* `require` any other files.
//
// 4. `Word.js` *should only* require `Letter.js`
//
// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`


//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.

// Selects Kardashians:
var wordsGuess = ["Kris Jenner", "Caitlyn Jenner", "Kourtney Kardashian", "Kim Kardashian West", "Khloe Kardashian", "Rob Kardashian", "Kendall Jenner", "Kylie Jenner"];
var randomIndex = Math.floor(Math.random() * wordsGuess.length);
var randomWord = wordsGuess[randomIndex];

// Requires word.js and letter.js
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");

// Gets a
var myWord = new wordConstructor.wordConstructor(randomWord);
var letterGuessed;
var guessCount = 15;
var inquirer = require("inquirer");

exports.letter;

function startGame() {
    inquirer.prompt(
        [
            {
                name: "start",
                type: "select",
                message: "Can you keep up with the Kardashians? \n   Press enter to start."
            }
        ]
    ).then(function() {
        guessesLeft = 15;
        makeGuess();
    });
};



function makeGuess(){
    console.log(myWord.toString());
    guessCount--
    if(guessCount == 0){
        console.log(" \n Looks like you can't keep up with the Kardashians. \n");
        return;
    }

    inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "\n Guess a letter!",
    }]).then(function(letterInput){
        var letter = letterInput.letter;
        myWord.findLetter(letter);

        if (myWord.isComplete()){
            console.log("\n You CAN keep up! Your Kardashian was..." + myWord.toString() + "!\n");
            return;
        }

        console.log(" \n ================= \n You have " + guessCount + " guesses left and even less money compared to a Kardashian!  \n ================= \n ");

        makeGuess();
        });
}

//Starts the game:
startGame();

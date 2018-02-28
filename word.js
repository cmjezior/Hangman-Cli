// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//
//   * A string value to store the underlying character for the letter
//
//   * A boolean value that stores whether that letter has been guessed yet
//
//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//
//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

var letterConstructor = require("./letter.js");

function Word(value){
    this.value = value;
    this.letters = [];
    this.userGuesses = "";
    for (var i = 0; i < this.value.length; i++){
        this.letters.push(new letterConstructor.letter(this.value[i]));
    }
};

Word.prototype.isComplete = function(){
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) return false;
    }
    return true;
};

Word.prototype.findLetter = function(letter){
    var lowerCaseLetter = letter.toLowerCase();

    if (this.userGuesses.indexOf(lowerCaseLetter) != -1){
        return "Duplicate";
    }
    //records the guess
    this.userGuesses += lowerCaseLetter;

    for (var i = 0; i < this.letters.length; i++){
        if(this.letters[i].value.toLowerCase() == lowerCaseLetter){
            this.letters[i].show = true;
        }
    }
};

Word.prototype.toString = function() {
    var output = " ";

    for (var i = 0; i < this.letters.length; i++){
        output += this.letters[i].printInfo();
    }
    return output;
};

exports.wordConstructor = Word;

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//
//   * An array of `new` Letter objects representing the letters of the underlying word
//
//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
//
//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

// We're incorporating an npm package for doing weather searches.


// determines what should be represented by a letter or a "_"
function letter(value){
    this.value = value;
    this.show = false;
    if (this.value == " "){
        this.show = true;
    }
}
// returns a "_" if not yet selected
letter.prototype.printInfo = function(){
    if(this.show){
        return this.value;
    }
    return "_ ";
}

// Export letter
exports.letter = letter;

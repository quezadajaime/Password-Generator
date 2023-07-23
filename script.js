// Assignment code here
document.querySelector("#generate").addEventListener(
  "click", writePassword); 

  //adding various arrays
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  function createPassword() {
    var getPasswordLength = parseInt 
      (prompt ("How many charcters would you like your password to contain?"));
      if (getPasswordLength < 8) {
      alert("Password must be at leaset 8 characters long.");
      generatePassword();
    }

    if (getPasswordLength > 128) {
      alert("Password length cannot be longer than 128 characters.");
      generatePassword();
    }

    if (isNaN(getPasswordLength)) {
      alert("Invalid input. Please add a number.");
      generatePassword();
    }
  //Confirming to include lowercase letters
    var includeAlphaLower = window.confirm(
      "Click OK to confirm including lower case characters"
    );
//confirming to include upper case
    var includeAlphaUpper = window.confirm(
      "Click OK to confirm including upper case characters"
    );
//confiring special characters
    var includeSpecialChar = window.confirm(
      "Click OK to confirm including special characters"
    );
//confirming numbers
    var includeNumber = window.confirm(
      "Click OK to confirm including number characters"
    );

    if (!includeAlphaLower && !includeAlphaUpper && !includeSpecialChar && !includeNumber){
    alert ("Password must include at least one character type.");
    return;
    }
//stores password info in object
    var passwordInfo = {
      passwordLength: getPasswordLength,
      includeAlphaLower: includeAlphaLower,
      includeAlphaUpper: includeAlphaUpper,
      includeNumber: includeNumber,
      includeSpecialChar: includeSpecialChar,
    };

    return passwordInfo;
  }
// get a random character from an array
  function getRandomChar(arr) {
    var randomChar = Math.floor(Math.random() * arr.length);
    var selectedChar = arr[randomChar];

    return selectedChar;
  }

  function generatePassword() {
    //passwordInfo object
    var passwordIncludes = createPassword();
//store create
    var createdPassword = [];

    var availableCharacters = [];
// adds array of lower case characters to avaialable characters
    if(passwordIncludes.includeAlphaLower) {
      availableCharacters = availableCharacters.concat(alphaLower);
    }
// adds array of upper case to available characters
    if(passwordIncludes.includeAlphaUpper) {
      availableCharacters = availableCharacters.concat(alphaUpper);
    }
//adds array of special characters to available characters
    if(passwordIncludes.includeSpecialChar){
      availableCharacters = availableCharacters.concat(specialChar);
    }
//adds array of numbers to avaialbe characters
    if(passwordIncludes.includeNumber){
      availableCharacters = availableCharacters.concat(number);
    }
//Itarate through password length, get random index from the array of available characters
    for (var i =0; i < passwordIncludes.passwordLength; i++) {
      var c = getRandomChar(availableCharacters);

// add characters to password array
      createdPassword.push(c);
    }

      return createdPassword.join("");
    

  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
document.querySelector("#generate").addEventListener(
  "click", writePassword); 

  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = [  ]



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

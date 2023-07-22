// Assignment code here
document.querySelector("#generate").addEventListener(
  "click", writePassword); 

  //adding various arrays
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  function generatePassword() { {
    var length = parseInt 
      (prompt ("How many charcters would you like your password to contain?"));
    };
    
    if (length<8) {
      alert("Password must be at leaset 8 characters long");
      return null;
    }

    if (length>128) {
      alert("Password length cannot be longer than 128 characters");
      return null;
    }
  
    var includeAlphaLower = confirm(
      "Click OK to confirm including lower case characters"
    );

    var includeAlphaUpper = confirm(
      "Click OK to confirm including upper case characters"
    );

    var includeSpecialChar = confirm(
      "Click OK to confirm including special characters"
    );

    var includeNumber = confirm(
      "Click OK to confirm including number characters"
    );

    if (!includeAlphaLower && !includeAlphaUpper && !includeSpecialChar && !includeNumber){
    alert ("Password must include at least one character type.");
    }
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

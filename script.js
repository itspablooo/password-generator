// Assignment Code
var generateBtn = document.querySelector("#generate");

// set variables for character options
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', ',', '<', '>', '?', '.'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// prompts to confirm password requirements 
function generatePassword() {
  var passwordLength = prompt('Length of password. Please enter a number between 8 and 128');
  var confirmLowerCase = prompt('Click confirm if you would like to use lower case characters.');
  var confirmUpperCase = confirm('Click confirm if you would like to use upper case characters.');
  var confirmNumber = confirm('Click confirm if you would like to use numbers.');
  var confirmSpecialChar = confirm('Click confirm if you would like to use special characters.')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

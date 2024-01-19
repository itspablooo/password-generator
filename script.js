// Assignment Code
var generateBtn = document.querySelector("#generate");

// set variables for password requirement options
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];

var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

var specialChar = ['!@#$%^&,*-_<>?.'];

var numbers = ['1234567890'];


function generatePassword() {

  //variable for the final output of the generatPassword function
  var output = ''

  // prompts to confirm password requirements 
  var passwordLength = prompt('Length of password. Please enter a number between 8 and 128');
  // make sure password length is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please choose a number between 8 and 128.')
    return
  };
  var confirmLowerCase = confirm('Click confirm if you would like to use lower case characters.');
  var confirmUpperCase = confirm('Click confirm if you would like to use upper case characters.');
  var confirmNumber = confirm('Click confirm if you would like to use numbers.');
  var confirmSpecialChar = confirm('Click confirm if you would like to use special characters.')

  //empty variable to add users choices
  var userSelection = ''
  //add users choices to the userSelection var
  if(confirmLowerCase) {
    userSelection = userSelection + lowerCase
  };
  if(confirmUpperCase) {
    userSelection = userSelection + upperCase
  };
  if(confirmNumber) {
    userSelection = userSelection + numbers
  };
  if(confirmSpecialChar) {
    userSelection = userSelection + specialChar
  };

  // if none are selected, the user will be prompted to select at least one requirement for their password. 
  if(userSelection === "") {
    alert('You must select at least one password requirement');
    return
  };

  console.log(userSelection)

  //for loop that loops userselection characters and randomizes using math methods 
  for(var i = 0; i < passwordLength; i++) {
    randomize = Math.floor(Math.random() * userSelection.length);
    output += userSelection[randomize]
  };
  return output

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

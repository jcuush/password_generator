// Global Variables
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()?'
};
var passLength = prompt("Enter a password length (Must be between 8 and 128 characters)");

var useLower = prompt("Do you want to use lowercase letters in password? (Yes or No)");
useLower = useLower.toLowerCase();

var useUpper = prompt("Do you want to use uppercase letters in password? (Yes or No)");
useUpper = useUpper.toLowerCase();

var useNumber = prompt("Do you want to use numbers in password? (Yes or No)");
useNumber = useNumber.toLowerCase();

var useSymbol = prompt("Do you want to use symbols in password? (Yes or No)");
useSymbol = useSymbol.toLowerCase();

// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

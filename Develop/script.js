// Global Variables
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()?'
};
var generatedPassword = "";


var passLength = prompt("Choose a length from 8 to 128");

var useLower = prompt("Do you want to use lowercase letters in password? (Yes or No)");
useLower = useLower.toLowerCase();

var useUpper = prompt("Do you want to use uppercase letters in password? (Yes or No)");
useUpper = useUpper.toLowerCase();

var useNumber = prompt("Do you want to use numbers in password? (Yes or No)");
useNumber = useNumber.toLowerCase();

var useSymbol = prompt("Do you want to use symbols in password? (Yes or No)");
useSymbol = useSymbol.toLowerCase();

if (passLength <8 || passLength > 128) {
  alert("Please enter a value between 8 and 128")
}

function generateRandomCharacter(){
passCategories = [];

if(useLower === "yes") passCategories.push(lowercase);
if(useUpper === "yes") passCategories.push(uppercase);
if(useNumber === "yes") passCategories.push(number);
if(useSymbol === "yes") passCategories.push(symbol);

// Selects category at random
var randomCategory=Math.floor(Math.random()*passCategories.length);

// Selects a character from category
var categoryLength = passCategories[randomCategory].max-passCategories[randomCategory].min;
var randomCharacter = Math.floor(Math.random()*categoryLength)+passCategories[randomCategory].min;

return randomCharacter;
}

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

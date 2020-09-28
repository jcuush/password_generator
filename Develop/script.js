// Global Variables

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var symbolList = "!@#$%^&*()?";
var generatedPassword = "";
var passLength = "";


var passLength = prompt("Choose a length from 8 to 128");
console.log(passLength);

var useLower = prompt("Do you want to use lowercase letters in password? (Yes or No)");
useLower = useLower.toLowerCase();
console.log(useLower);

var useUpper = prompt("Do you want to use uppercase letters in password? (Yes or No)");
useUpper = useUpper.toLowerCase();
console.log(useUpper);

var useNumber = prompt("Do you want to use numbers in password? (Yes or No)");
useNumber = useNumber.toLowerCase();
console.log(useNumber);

var useSymbol = prompt("Do you want to use symbols in password? (Yes or No)");
useSymbol = useSymbol.toLowerCase();
console.log(useSymbol);

if (passLength <8 || passLength > 128) {
  alert("Please enter a value between 8 and 128")
}

function generateRandomCharacter(){
passCategories = [];

if(useLower === "yes") passCategories.push(lowerCase);
if(useUpper === "yes") passCategories.push(upperCase);
if(useNumber === "yes") passCategories.push(numberList);
if(useSymbol === "yes") passCategories.push(symbolList);

// Selects category at random
var randomCategory=Math.floor(Math.random()*passCategories.length);

// Selects a character from category
var categoryLength = passCategories[randomCategory].max-passCategories[randomCategory].min;

var randomCharacter = Math.floor(Math.random()*categoryLength)+passCategories[randomCategory].min;

return randomCharacter;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  generatedPassword = "";
  for(i = 0; i < passLength; i++) {
    var passCharacter = generateRandomCharacter();
    generatedPassword+=String.fromCharCode(passCharacter);
    
  }
  var password = generatedPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}



// Write password to the #password input
// function writePassword() {
//   var password = generatedPassword;
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
 
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



// Global Variables

  
  // var passCriteria = ["Lowercase", "Uppercase", "Special Characters", "Numbers"]

  // for (var i = 0; i < passCriteria.length; i++) {
  // var userInput = prompt("Do you want to use " +passCriteria[i] +"?" +" Type Yes or No");
  // userInput = userInput.toLowerCase();
  //   if(passCriteria[i].userInput==="yes")
  // }

var passLength = document.querySelector('input[name="length"]');
var passLower = document.querySelector('input[name="lowercase"]');
var passUpper = document.querySelector('input[name="uppercase"]');
var passNumber = document.querySelector('input[name="number"]');
var passSpecial = document.querySelector('input[name="symbol"]');


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

// function writePassword(){
//   document.getElementById("password").innerHTML = "NICE";
// }



//     if(userInput === "yes") {

//     }
//   }
// }
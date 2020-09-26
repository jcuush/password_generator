var passCriteria = ["Lowercase", "Uppercase", "Special Characters", "Numbers"]

for (var i = 0; i < passCriteria.length; i++) {
  var userInput = prompt("Do you want to use " +passCriteria[i] +"?" +" Type Yes or No");
  userInput = userInput.toLowerCase();

  if (passCriteria[i]==="yes") {
    
  }


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

// function writePassword(){
//   document.getElementById("password").innerHTML = "NICE";
// }
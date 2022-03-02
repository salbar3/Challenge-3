// Assignment code here



//character arrays
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']


//random character functions
var getRandomLower = function () {
  return lowerChar[Math.floor(Math.random() * lowerChar.length)]
}

var getRandomUpper = function () {
  return upperChar[Math.floor(Math.random() * upperChar.length)]
} 

var getRandomNum = function () {
  return numChar[Math.floor(Math.random() * numChar.length)]
}

var getRandomSym = function () {
  return symChar[Math.floor(Math.random() * symChar.length)]
}


var questions = function () {

  var lengthAsk = window.prompt("How long would you like your password to be? (type a number between 4 and 24.)")

  var numAsk = window.confirm("Would you like numbers in your password?")

  var upperAsk = window.confirm("Would you like uppercase letters in your password?")

  var lowerAsk = window.confirm("Would you like lowercase letters in your password?")

  var symAsk = window.confirm("Would you like special symbols in your password?")

  AskInputs = {
    length: lengthAsk,
    number: numAsk,
    upper: upperAsk,
    lower: lowerAsk,
    symbol: symAsk
  }

  return AskInputs;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")


// Write password to the #password input


function generatePassword() {

  var answers = questions()

  console.log(answers)

  var password = []

  for (i = 0; i < answers.length; i++){
    
    if (answers.number === true){
      password.push(getRandomNum())
    }
    if (answers.upper === true){
      password.push(getRandomUpper())
    }
    if (answers.lower === true){
      password.push(getRandomLower())
    }
    if (answers.symbol === true){
      password.push(getRandomSym())
    }
 
  }

  //console.log(password.join('').substring(0,answers.length))

  return password.join('').substring(0,answers.length)
}

function writePassword() {

  password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




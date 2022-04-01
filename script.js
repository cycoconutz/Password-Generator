// Button Variable
var generateBtn = document.querySelector("#generate");

//Button Listener which executes Password Gen function
generateBtn.addEventListener("click", generatePassword);

//Starts the Password Gen functions on button click
function generatePassword(){
  var length = passLength();
  var charList = writePassword();
  var genPass= "";
  for(i=0; i <= length; i++){
    randomNum = Math.min(Math.floor(Math.random() * 100), charList.length - 1)
    genPass += charList[randomNum];
  }
  printPassword(genPass);
}

//Input prompt for length of password
function passLength(){
  var inputLength = Number(prompt("Password Lenght: (Input a number 8-128)"));
  //Alerts if number is below 8 or above 128
  if (inputLength < 8 || inputLength > 128){
    alert("Invalid input. Please input a number between 8-128.")
    passLength();
    }
  return inputLength;
}

//Password Character Defining Function
function writePassword() {
  //Password Characters Variables
  var passLower = "abcdefghijklmnopqrstuvwxyz";
  var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passNum = "0123456789";
  var passSpec = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~`;
  var charList = "";
  var specialChar = confirm("Do you want to include special characters in the password?");
  var numericChar = confirm("Do you want to include numberic characters in the password?");
  var lowerCaseChar = confirm("Do you want to include lower case characters in the password?");
  var UpperCaseChar = confirm("Do you want to include upper case characters in the password?");
  //Takes True responses and populates charList empty string with characters
  if (specialChar === true){
    charList += passSpec;
  }
  if (numericChar === true){
    charList += passNum;
  }
  if (lowerCaseChar === true){
    charList += passLower;
  }
  if (UpperCaseChar === true){
    charList += passUpper;
  }
  console.log(charList);
 return charList;
}
// console.log(writePassword());

//Prints Generated password onto page (probably not safe but whatever)
function printPassword(password) {
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}
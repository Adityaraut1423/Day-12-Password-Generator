const passwordEl = document.getElementById("password");


function generatePassword() {
const length = document.getElementById("length").value;
const useUppercase = document.getElementById("uppercase").checked;
const useNumbers = document.getElementById("numbers").checked;
const useSymbols = document.getElementById("symbols").checked;


const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";


let characters = lowercase;
if (useUppercase) characters += uppercase;
if (useNumbers) characters += numbers;
if (useSymbols) characters += symbols;


let password = "";
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}


passwordEl.value = password;
}


function copyPassword() {
if (!passwordEl.value) return;
navigator.clipboard.writeText(passwordEl.value);
alert("Password copied to clipboard! 📋");
}
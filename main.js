const passwordBox = document.getElementById("password");

const lenght = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!?=()[]{|^@#~&%µ*£§_/.,;/-+";

const allChars = upperCase + lowerCase + numbers + symbol;
const normalChars = upperCase + lowerCase + numbers;

const copy = document.getElementById("copy");
const btn = document.getElementById("btn");


function creatPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function creatPasswordWithout(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while(lenght > password.length){
        password += normalChars[Math.floor(Math.random() * normalChars.length)];
    }
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
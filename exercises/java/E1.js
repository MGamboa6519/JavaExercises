'use-strict'
// Exercise 1

function comparison(digit1, digit2){
    if (digit1 > digit2){
        console.log(digit1 + " is greater than " + digit2);
    } else if (digit1 < digit2){
        console.log(num1 + " is less than " + num2);
    }  else if (digit1 == digit2){
        console.log("The numbers are equal.");
    }
}

var digit1 = parseInt(prompt("Enter the first number: "));
var digit2 = parseInt(prompt("Enter the second number: "));

while (digit1 <= 0 || isNaN(digit1)){
    digit1 = parseInt(prompt("Enter the first number: "));
}
while (digit2 <= 0 || isNaN(digit2)){
    digit2 = parseInt(prompt("Enter the second number: "));
}

console.log("First Exercise");
comparison(digit1,digit2);
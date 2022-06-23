'use-strict'
// Exercise 5

console.log("Fifth Exercise");
var number = parseInt(prompt("Input a number: "));

for (let i = 0; i <= number; i++){
    if (number % i == 0){
        console.log(number + " is divisible by " + i);
    }
}
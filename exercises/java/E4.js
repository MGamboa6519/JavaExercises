'use-strict'
// Exercise 4

var digit1 = parseInt(prompt("Input the first number: "));
var digit2 = parseInt(prompt("Input the second number: "));

console.log("Fourth Exercise");
for (let i = digit1; i <= digit2; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}
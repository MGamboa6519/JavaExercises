'use-strict'
// Exercise 7

var number = parseInt(prompt("Input a number: "));
console.log("Seventh Exercise");

for (let i = 1; i <= number; i++){
    console.log("Multiplication table for " + i );
    for (let x = 1; x <= number; x++){
        mult = i*x;
        console.log(i + " * " + x + " = " + mult);
    }
}

'use-strict'
// Exercise 2

var count = 0;
var number = 0;
var sum = 0;
    
while (number >= 0){
    number = parseInt(prompt("Input a number: "));
    console.log(number);
    count++;
    sum += number;
}

console.log("Second exercise");
console.log("Total of sum: " + sum);
var avg = (sum - number) / (count-1);
console.log("Average: " + avg);
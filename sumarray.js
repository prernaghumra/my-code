const input = require("readline-sync");
let n = input.questionInt("enter the n number:");
let sum = 0;
let i   = 0;
let array = [];
while(i<n)
{
    let b=input.questionInt("enter the number");
    array[i]=b;
    sum = sum + array[i];
    i++;
}
console.log(sum);
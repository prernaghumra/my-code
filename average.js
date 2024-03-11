const input = require("readline-sync");
let n = input.questionInt("enter the n number:");
let sum  =0;
let i =0;
let a=[];
while(i<n)
{
    a[i]= input.questionInt("enter the number:");
    i++;
}
i = 0;
while(i<n)
{
    sum= sum+a[i];
    i++;
}
average= sum/n;
console.log(average);
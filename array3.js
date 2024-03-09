const input = require("readline-sync");
let n = input.questionFloat("enter the number");
let a = [];
let i = 0;
while(i<n)
{
    let b = input.questionInt()
    a[i]=b;
    i++;
}
i= n-1;
while(i>0)
{
    console.log(a[i]);
    i--;
}
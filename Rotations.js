const input = require("readline-sync");
let n = input.questionInt("enter the number n:");
let r = input.questionInt("enter the number og r:");
let a = [];
for(let i = 0; i<n; i++)
{
    a[i]= input.questionInt("enter the number");
}
for(let i = 0; i <r;i++)
{
    let l = a[n-1];
    for(let j = n-1; j>0; j--)
    {
        a[j] =a[j-1];
    }
    a[0] =  l;
}
console.log(a.join(""));

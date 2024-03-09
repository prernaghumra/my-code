const input= require("readline-sync");
let n = input.questionInt("enter the number:");
let i = 1;
let s = 0;
while(i<=n)
{
    p = n%10;
    s = s+p;
    n = Math.floor(n/10);
}console.log(s);
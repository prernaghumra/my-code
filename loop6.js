const input= require("readline-sync");
let n = input.questionInt("enter the number");
let s = 0;
while(n!=0)
{
    r = n%10!=0;
    s = s+r;
    n = Math.floor(n/10);
}console.log(s);
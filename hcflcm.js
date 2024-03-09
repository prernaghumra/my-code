const input= require("readline-sync");
let n = input.questionInt("enter the number:");
let m = input.questionInt("enter the number:");
a = n*m;
while(n%m!=0)
{
    r = n%m;
    n = m;
    m = r;
}console.log(m,a/m);
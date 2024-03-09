const input=require("readline-sync");
let a = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
q= Math.floor(a/b);
r= a%b;
{
    console.log(q,r);
}

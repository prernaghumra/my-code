const input=require("readline-sync");
let m = input.questionInt("enter the number");
let n = input.questionInt("enter the number");
let i = m;
let p = 0;
while(i<=n)
{
    p = i+p;
    i++;
}
{
    console.log(p);
}
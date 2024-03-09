const input= require("readline-sync");
let n = input.questionInt("enter the number:");
let a = [];
i = 0;
while(i<n)
{
    let b = input.questionInt("num:");
    a[i]=b;
    i++;
}
i=0;
while(i<n)
{
    console.log(">".repeat(a[i]));
    i++;
}
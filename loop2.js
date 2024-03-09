const input = require("readline-sync");
let n= input.questionInt("enter the number :");
i=1;
while(i<=n)
{
    if(i%2==0)
    {
    console.log(i);
    }
    i++;
}
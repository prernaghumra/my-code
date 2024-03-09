const input= require("readline-sync");
let n = input.questionInt("enter the number:");
let name= input.question("enter the name");
i=1;
while(i<=n)
{
    console.log(name);
    i++;
}
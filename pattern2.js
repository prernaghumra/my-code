const input=require("readline-sync");
let n =input.questionInt("enter the value of n: ");
for(let i = 5; i>=1; i--)
{
    let row = " ";
for(let j= 1; j<=i; j++)
    {
        row+="* ";
    }
    console.log(row);
}
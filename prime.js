const input = require("readline-sync")
let n = input.questionInt("enter the number")
let i = 2
while(i<n)
{
    if(n%i==0)
    {
        console.log("not prime number");
        i++;
        break;
    }
    else{
        i++;
    }
    if(i==n){
        console.log("prime number");
    }
}
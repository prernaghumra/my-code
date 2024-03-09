const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let i = 0;
s ="";
while(i<=n)
{
    j=1;
    while(j<=5)
    {
      s+=("*");
      j++;
    }
    s+=("\n");
    i++;
}
console.log(s);
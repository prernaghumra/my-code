const input =require("readline-sync");
let n = input.questionInt("enter the number:");
let i = 1;
s="";
while(i<=n)
{
    j=1;

while(j<=i)
{
    s+=j;
    j++;
}
j=i-1;
while(0<j)
{
    s+=j;
    j--;
}

s+=("\n");
i++;
}
console.log(s);
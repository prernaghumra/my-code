const input = require("readline-sync");
let n = input.questionInt("enter the n number:");
let s = input.questionInt("enter  the s number:");
let a = [];
let i = 0, j;
while(i<n)
{
    let b = input.questionInt("enter the number:");
    a[i]=b;
    i++;
}
i=0;
while(i<n)
{
    j=i+1;
    if(a[i]+a[j]==s)
    {
        console.log(a[i],a[j]);
    }
    i++;
}

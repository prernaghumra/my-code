const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let place = input.questionInt("enter the place:");
a=[];
i =  0;
while(i<n)
{
    let b = input.questionInt("enter the number:");
    a[i]= b;
    i++;
}
i = place;
while(i<=n-2)
{
    a[i]=a[i+1];
    i++;
}
i=0;
while(i<n-1)
{
    console.log(a[i]);
    i++;
}




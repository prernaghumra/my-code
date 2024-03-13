const input =require("readline-sync");
let n = input.questionInt("enter the number n:");
let k = input.questionInt("enter the number k number:");
let i =0;
a=[];
while(i<n)
{
    let b = input.questionInt("enter the number:");
    a[i]=b;
    i++;
}
i=0;
while(n>1)
{
    r = i+k-1;
    while(r>=n)
    {
      r=r-n;
    }
    console.log(a[r]);
    i=r;
    while(r<n-1)
    {
        a[r]=a[r+1];
        r++;
    }
    n--;
}
console.log(a[0]);

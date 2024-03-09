const input = require("readline-sync");
let n= input.question("enter the number");
i=1;
sum=0;
while(i<n)
{
if (n%i==0){
    sum=sum+i;
    i=i+1
}
else {
    i= i+1;
}
} 
if(sum==n)
{
    console.log("perfect number");
}
else{
    console.log(" not perfect");
}
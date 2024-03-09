const input=require("readline-sync");
let n = input.questionInt("enter the number:");
let m = input.questionInt("enter the checking no.:");
let a=[];
let i = 0;
while(i<n)
{
    let b =input.questionInt("num:");
    a[i]=b;
    i++;
}
 i=0;
 let count =0;
 while(i<n)
 {
   if(a[i]==m)
    {
        count = 1;
        break;
    }
    i++;
 }
 if (count==1)
 {
    console.log("the number is exist:",m);
 }else
 {
    console.log("the number is exist:",m);
 }

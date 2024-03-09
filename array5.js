const input=require("readline-sync");
let n = input.questionInt("enter the number:");
let a = [];
 i=0; 
 s=0;
 s1=0;
 while(i<n)
 {
    let b = input.questionInt("num:");
    a[i]=b;
    i++;
 }
 i=0;
 while(i<n)
 {
    if(a[i]%2==0)
    {
        s1=s1+a[i]
    }else{

        s=s+a[i];
    }
    i++;
 }console.log(s,s1);
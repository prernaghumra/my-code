const input = require("readline-sync");
let n =input.questionInt("enter the number");
let p = n;
sum=0
while(p>0){
    m=p%10;
    p=Math.floor(p/10);
    sum=sum*10+m;
    
}
if (sum==n){
    console.log("The number is palindrome");
}
else{
    console.log("not a palindrome");
}



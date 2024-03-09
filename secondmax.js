const input = require('readline-sync');
let n = input.questionInt("enter the n number");
let a = input.questionInt("enter the number");
var i =2
var max=a,secondmax=a;
while(i<=n){
    var b=input.questionInt("enter the number")
if(max<b){
    var t =max;
    max = b;
    b = t;
}
if(secondmax<b){
  secondmax=b;
}
i=i+1;
}
console.log(secondmax);
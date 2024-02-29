const input = require('readline-sync');
let n = input.questionInt("enter the number of n:");
console.log("find the max and min");
let a = input.questionInt("enter the number:");
let max = a;
let min = a;
let i = 2;
while(i<=n){
    let num = input.questionInt("enter the element")
if(num>max){
        max=num
    }
if(num<min){
        min = num 
    }
    i++
}
console.log("max=",max,"min=",min);

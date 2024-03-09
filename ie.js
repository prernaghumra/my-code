const input = require("readline-sync");
let a = input.questionInt("enter the a number");
let b = input.questionInt("enter the b number");
if(a>b){
    console.log("a is greater" );
}
else{
    console.log("b is greater" );
}
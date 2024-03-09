const input = require("readline-sync");
let n = input.questionInt("enter the number");
if(n>0){
    console.log("positive");
}
else if (n<0){
    console.log("negative");
}
else{
    console.log("zero");
}
    

const input = require("readline-sync");
let p= input.questionInt("enter the number");
let c = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
let m = input.questionInt("enter the number");
let h = input.questionInt("enter the number");
q= p+c+b+m+h
N=(q/500)*100
if (N>=90){
    console.log("A");
}
else if (N>=80){
    console.log("B");
}
else if (N>=70){
    console.log("C");
}
else if (N>=60){
    console.log("D");
}
else if (N>=50){
    console.log("E");
}
else {
    console.log("F");
}
const input =require("readline-sync");
let n = input.questionInt("enter the number:");
if (n%2==0){
    console.log(n);
}
else{
    console.log(n*2);
}
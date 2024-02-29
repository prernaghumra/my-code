// greater of 4 number
const input =require ("readline-sync");
let a = input.questionInt("enter first number");
let b = input.questionInt("enter second number");
let c = input.questionInt("enter third number");
let d = input.questionInt("enter fourth number");
if (a>b  && a>c && a>d){
    console.log(a);
}
else if(b>c&& b>d){
 console.log(b);
}
else if(c>d){
    console.log(c);
}
else {
    console.log(d);
}
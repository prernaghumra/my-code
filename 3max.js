const input = require("readline-sync");
let a = input.questionInt("enter first number");
let b = input.questionInt("enter second number");
let c = input.questionInt("enter third number");
if (a>b){
    max=a;
    min=b;
}
else{
    max=b;
    min=a;
}
if(c>d){
   max1=c;
   min1=d;
}
else{
    max1=d;
    min1=c;
}
if(max>max1){
    max2=max;
    min2=max1;
}
else{
    max2=max1;
    min2=max;
}
if(min2>min1){
    max3=min2;
    min3=min1;
}
else{
    max3=min1;
    min3=min2;
}
if(min3>min){
    console.log(max4)
}
else{
    console.log(min)
}
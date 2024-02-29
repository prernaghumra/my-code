const input = require("readline-sync");
let a = input.questionInt ("enter first number");
let b = input. questionInt("enter second number");
let c  = input .questionInt("enter third number");
let d = input.questionInt("enter fourth number");
if(a>b){
    l=a;
    s=b;
}
else {
    l=b;
    s=a;
}
if (c>d){
    l1=c;
    s1=d;
}
else{
    l1=d;
    s1=c;
}
if(l>l1){
    l2=l;
    s2=l1;
}
else{
    l2=l1;
    s2=l;
}
if(s>s1){
    l3=s;
    s3=s1;
}
else{

    l3=s1;
    s3=s;
}
if (s2>s3){
    l4=s2;
    s4=s3;
}
else{
    l4=s3;
    s4=s2;
}
if(l3>l4){
    console.log(l3)
}
else{
    console.log(l4)
}
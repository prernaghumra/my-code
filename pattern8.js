const input = require("readline-sync")
let n = input.questionInt("enter the number of rows: ")

let c=1
for(let i=1; i<n; i++){
    let a="*";
    console.log(a.repeat(c));
    c+=2
}
let d=c
for(let i=n; i>0; i--){
    let z ="*";
    console.log(z.repeat(d));
    d-=2
}

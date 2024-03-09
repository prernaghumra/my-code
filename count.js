const input = require("readline-sync")
let n = input.questionInt("enter the number: ")
i=1;
count=0;
while (i<=n) {
    a=n%10
    count=count+1
    n=Math.floor(n/10)
  



}
console.log(count);
const input= require("readline-sync");
let n = input.questionInt("enter the number of rows");
i=1;
s=""
p = 1;
while(i<=n)
{
 j=1;
 while(j<=i){
    s+=p
    p++;
    j++;
 }
 s+=("\n")
 i++;
}
console.log(s)
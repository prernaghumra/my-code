const input=require("readline-sync");
let n = input.questionInt("enter the number:");
let i = 1;
s="";
while(i<=n)
{
    j=1;
    while(j<=i)
    {
        if(j==1)
        {
            s+=("*");
            j++;
        }
        else if(j==i)
        {
            s+=("*");
            j++;
        }
        else{
            s+=(" ");
            j++;
        }

    }
    s+=("\n");
    i++;
}
while(i>0)
{
    s+=("*");
    i--;
}
console.log(s);
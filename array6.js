const input= require("readline-sync");
let n = input.questionInt("enter the size of array:");
let a = [];
let i = 0;
while(i<n)
{
    a[i] = input.questionInt("num:");
    i++;
}
i=0;
while(i<n)
{
    let j =i+1;
    let p=1;
    while (j<n){
        if (a[i]==a[j])
        {
          console.log(a[j]);
          k = j;
          p++;
          while(k<n-1)
          {
            a[k]=a[k+1];
            k=k+1;
          }
          n=n-1
        }
        else
        {
            j++;
        }
    }
    // console.log(a[i]+"-"+p);
    i++;
}
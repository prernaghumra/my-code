const input=require("readline-sync")
let n = input.questionInt("enter the n number:")
let array=[]
let i = 0
while(i<n)
{
    let a =input.questionInt("enter the number:")
    array[i]=a
    i++
}
while(i<n)
{
    j=i
    while(j>0)
    {
        if(array[j-1]>array[j])
        {
           let z=array[j-1]
           array[j-1]=array[j]
           array[j]=z
        }j--
    }i++
}console.log(array);
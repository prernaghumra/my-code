const input = require("readline-sync");
let S = input.questionInt("enter the S:");
if(S<=10000){
   HRA=S*20/100;
   DA =S*80/100;
   GS = S + HRA + DA;
   console.log(GS);
    
}
else if (S<=20000)
{
    HRA=S*25/100;
    DA=S*90/100;
    GS= S+HRA+DA;
    
        console.log(GS);

} 
else{
    HRA=S*30/100;
    DA=S*90/100;
    GS = S=HRA+DA;
    
        console.log(GS);
    
}
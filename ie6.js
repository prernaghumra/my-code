const input = require("readline-sync");
let U= input.questionInt("enter the U:");
if(U<=50)
{
    B = U*0.50;
    SURCHARGE = B*20/100;
    TOTALBILL = B+SURCHARGE;
    console.log(TOTALBILL);
}
else if (U<=150)
{
    B = 25+(U-50)*0.75;
    SURCHARGE = B*20/100;
    TOTALBILL = B + SURCHARGE;
    console.log(TOTALBILL);
}
else if (U<=250)
{
    B = 100+(U-150)*1.20;
    SURCHARGE = B*20/100;
    TOTALBILL = B+SURCHARGE;
    console.log(TOTALBILL);
} else
{
    B = 220+(U-250)*1.50;
    SURCHARGE = B*20/100;
    TOTALBILL = B+ SURCHARGE;
    console.log(TOTALBILL);
}
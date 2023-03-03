const prompt=require("prompt-sync")();
let a=prompt("Enter first Number");
let b=prompt("Enter second number");
let c=prompt("Enter third number");
let Num1=0,Num2=0,Num=0,Num4=0;
console.log("Arthmetic operation a+b*c is "+(Num1=a+b*c));
console.log("Arthmetic operation a+b*c is "+(Num2=a%b+c));
console.log("Arthmetic operation a+b*c is "+(Num=c+a/b));
console.log("Arthmetic operation a+b*c is "+(Num4=a*b+c));
let Num3=Math.floor(Num);
if(Num1<=Num2 && Num1<=Num3 && Num1<=Num4)
{
    console.log("Minimum number is "+Num1);
}
else if(Num2<=Num1 && Num2<=Num3 && Num2<=Num4)
{
    console.log("Minimum number is "+Num2);
}
else if(Num3<=Num2 && Num3<=Num1 && Num3<=Num4)
{
    console.log("Minimum number is "+Num3);
}
else
{
    console.log("Minimum number is "+Num4);
}

if(Num1>=Num2 && Num1>=Num3 && Num1>=Num4)
{
    console.log("Maximum number is "+Num1);
}
else if(Num2>=Num1 && Num2>=Num3 && Num2>=Num4)
{
    console.log("Maximum number is "+Num2);
}
else if(Num3>=Num2 && Num3>=Num1 && Num3>=Num4)
{
    console.log("Maximum number is "+Num3);
}
else
{
    console.log("Maximum number is "+Num4);
}
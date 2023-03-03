const prompt=require("prompt-sync")();
let num=prompt("Enter number");
if(num<=10)
{
    console.log("Unit");
}
else if(num<=100)
{
    console.log("Ten");
}
else if(num<=1000)
{
    console.log("Hundred");
}
else
{
    console.log("Thousand or more");
}
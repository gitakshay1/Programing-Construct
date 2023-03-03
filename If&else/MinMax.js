let random1=Math.floor(Math.random()*100);
let random2=Math.floor(Math.random()*100);
let random3=Math.floor(Math.random()*100);
let random4=Math.floor(Math.random()*100);
let random5=Math.floor(Math.random()*100);
if(random1<=random2 && random1<=random3 && random1<=random4 && random1<=random5)
{
    console.log("Minimun number is "+random1);
} 
if(random2<=random1 && random2<=random3 && random2<=random4 && random2<=random5)
{
    console.log("Minimun number is "+random2);
} 
if(random3<=random1 && random3<=random2 && random3<=random4 && random3<=random5)
{
    console.log("Minimun number is "+random3);
} 
if(random4<=random2 && random4<=random3 && random4<=random1 && random4<=random5)
{
    console.log("Minimun number is "+random4);
} 
if(random5<=random2 && random5<=random3 && random5<=random1 && random4<=random4)
{
    console.log("Minimun number is "+random5);
} 
if(random1>=random2 && random1>=random3 && random1>=random4 && random1>=random5)
{
    console.log("Maximum number is "+random1);
} 
if(random2>=random1 && random2>=random3 && random2>=random4 && random2>=random5)
{
    console.log("Maximum number is "+random2);
} 
if(random3>=random1 && random3>=random2 && random3>=random4 && random3>=random5)
{
    console.log("Maximum number is "+random3);
} 
if(random4>=random2 && random4>=random3 && random4>=random1 && random4>=random5)
{
    console.log("Maximum number is "+random4);
} 
if(random5>=random2 && random5>=random3 && random5>=random1 && random5>=random4)
{
    console.log("Maximum number is "+random5);
} 
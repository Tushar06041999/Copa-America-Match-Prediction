let firstSpan=document.getElementById("first-span");
let secondSpan=document.getElementById("second-span");
let btn=document.getElementById("btn");

btn.addEventListener('click',function(){
    let num1=parseInt(Math.floor(Math.random()*5));
    let num2=parseInt(Math.floor(Math.random()*5));
    if(num1==num2){
        firstSpan.innerHTML=num1 + 1;
        secondSpan.innerHTML=num2 + 2;
    }else{
        firstSpan.innerHTML=num1;
        secondSpan.innerHTML=num2;
    }
        
   
})
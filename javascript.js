let darkmode=document.querySelector(".ri-moon-fill");
let lightmode=document.querySelector(".ri-sun-fill");
function updateTime(){
    const date=new Date();
    document.querySelector(".day").innerHTML=date.toLocaleDateString("en-us",{weekday:"long"});
     document.querySelector(".time").innerHTML=date.toLocaleTimeString("en-us");
  
}
setInterval(updateTime,1000);
darkmode.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="Black";
    lightmode.style.display="block";
    darkmode.style.display="none";
})
lightmode.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="White";
    lightmode.style.display="none";
    darkmode.style.display="block";
})
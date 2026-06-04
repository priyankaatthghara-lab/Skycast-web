let darkmode=document.querySelector(".ri-moon-fill");
let lightmode=document.querySelector(".ri-sun-fill");
let Temperature=document.querySelector(".Temperature");
let City=document.querySelector(".City");
let humidityvalue=document.querySelector(".humidity-value");
let humiditylabel=document.querySelector(".humidity-label");
let windspeedvalue=document.querySelector(".windspeed-value");
let windspeedlabel=document.querySelector(".windspeed-label");
let inputtype=document.querySelector(".inputtype");
let searchbutton=document.querySelector(".ri-search-2-line");
let image=document.querySelector(".image");
let cardtitle=document.querySelector(".card-title");
let cardsubtitle=document.querySelector(".card-subtitle");
let aqitext=document.querySelector(".aqitext");
let cardelement=document.querySelector(".cardelements");
let nav=document.querySelector("nav");
let mininews=document.querySelector(".mininews");
function updateTime(){
    const date=new Date();
    document.querySelector(".day").innerHTML=date.toLocaleDateString("en-us",{weekday:"long"});
     document.querySelector(".time").innerHTML=date.toLocaleTimeString("en-us");
  
}
setInterval(updateTime,1000);
darkmode.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#1A1A1A";
    lightmode.style.display="block";
    darkmode.style.display="none";
    cardelement.style.backgroundColor="#87CEEB";
    nav.style.color="#FFFFF0";
    mininews.style.backgroundColor="#87CEEB";
      
})
lightmode.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="White";
    lightmode.style.display="none";
    darkmode.style.display="block";
    nav.style.color="#1A1A1A";
    cardelement.style.backgroundColor="#175066";
    mininews.style.backgroundColor="#175066";
})
const apikey=("f23cf4b7ad763b4313dee9d7fd95210c");
const apiurl=("https://api.openweathermap.org/data/2.5/weather?units=metric&q=");
const aqiurl=("https://api.openweathermap.org/data/2.5/air_pollution?lat=")

async function checkweather(city){
    let response=await fetch(apiurl+city+`&appid=${apikey}`);
    let data=await response.json();
    console.log(response.status);
    const latitude=data.coord.lat;
    const longitude=data.coord.lon;
     Temperature.textContent= Math.round(data.main.temp)+"°C";
    City.textContent=data.name;
    humidityvalue.textContent=data.main.humidity;
    windspeedvalue.textContent=data.wind.speed;

    if(data.weather[0].main=="Clouds"){
        image.src="cloudimage.png";
        cardtitle.innerHTML="Cloudy Weather";
        cardsubtitle.innerHTML="A perfect day to pause and unwind. Stay in, breathe easy, enjoy the grey. ☁️";

    }
    else if(data.weather[0].main=="Clear"){
        cardtitle.innerHTML="Clear Weather";
        cardsubtitle.innerHTML="Enjoy the sunshine and bright skies! 🌞";
        image.src="sunnyimage.png";
    }
    else if(data.weather[0].main=="Rain"){
        image.src="rainyimage.png";
        cardtitle.innerHTML="Rainy Weather";
        cardsubtitle.innerHTML="Don't forget your umbrella! ☔️";
    }
    checkingaqi(latitude, longitude);
  console.log(data);
}

searchbutton.addEventListener("click",()=>{
    checkweather(inputtype.value);
   
})
async function checkingaqi(lat,lon){
   
  let response=await fetch(aqiurl + lat + `&lon=${lon}&appid=${apikey}`);
    let data=await response.json();
    console.log(response.status);
        let aqi=data.list[0].main.aqi;
        if(aqi === 1){
    aqitext.textContent = "Good 😊";
}
else if(aqi === 2){
    aqitext.textContent = "Fair 🙂";
}
else if(aqi === 3){
    aqitext.textContent = "Moderate 😐";
}
else if(aqi === 4){
    aqitext.textContent = "Poor 😷";
}
else{
    aqitext.textContent = "Very Poor ⚠️";
}

    console.log(data);
}


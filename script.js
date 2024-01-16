let currCity = "new delhi";
let city = document.querySelector(".city");
let temperature = document.querySelector(".temperature");
let confirmButton = document.querySelector(".confirm-button");
let changeUnit = document.querySelector(".unit-button");
let unit="C"

async function fetchWeatherApi(){
    let res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${currCity}&key=0636606a87024694bd173855241601`);
    let data = await res.json();
    if(unit=="C"){
        temperature.innerHTML = data.current.temp_c+"&deg;"+unit;
    }
    else{
        temperature.innerHTML = data.current.temp_f+"&deg;"+unit;
    }
    
    city.innerText = data.location.name;
}

fetchWeatherApi();

confirmButton.addEventListener("click",()=>{
    let cityEntered = document.querySelector("#city");
    if(cityEntered.value!=""){
        currCity=cityEntered.value;
    }
    fetchWeatherApi();
});

changeUnit.addEventListener("click",()=>{
    if(unit=="C"){
        unit="F";
    }
    else{
        unit="C";
    }
    fetchWeatherApi();
})
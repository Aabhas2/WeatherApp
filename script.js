//state
let currCity = "London";
let units = "metric";

//Selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector(".weather__forecast");
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__minmax = document.querySelector(".weather__minmax");
let weather__realfeel = document.querySelector(".weather__realfeel");
let weather__humidity = document.querySelector(".weather__humidity");
let weather__wind = document.querySelector(".weather__wind");
let weather__pressure = document.querySelector(".weather__pressure");
let weather_windDirection = document.querySelector(".weather__wind-direction i");  
const themeSwitch = document.getElementById('themeSwitch'); 
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true; // Set the toggle to checked if dark theme is active
} else {
    body.classList.add('light-theme');
}

// Event listener for theme toggle
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});

//search 
document.querySelector(".weather__search").addEventListener('submit', e => {
    let search = document.querySelector(".weather__searchform");
    //prevent default action 
    e.preventDefault();
    //change current city
    currCity = search.value;
    //get weather forecast
    getWeather();
    //clearform
    search.value = ""
});

//units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if (units !== "metric") {
        //change to metric
        units = "metric";
        //get the weather forecast 
        getWeather();
    }
});

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if (units !== "imperial") {
        //change to imperial
        units = "imperial";
        //get the weather forecast 
        getWeather();
    }
});

function convertTimeStamp(timestamp, timezone) {
    const date = new Date(timestamp * 1000); //adjust timestamp with timezone 

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    return date.toLocaleString("en-US", { ...options, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
}

//Convert country code to name 
function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country)
}

function getWeather() {
    const apiKey = 'e9367c5d3f54724882733114b3246654';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${apiKey}&units=${units}`).then(res => res.json()).then(data => {
        console.log(data)
        city.innerHTML = `${data.name},${convertCountryCode(data.sys.country)}`
        datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
        weather__forecast.innerHTML = `<p>${data.weather[0].main}`
        weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
        weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`
        weather__minmax.innerHTML = `<p>Min:${data.main.temp_min.toFixed()}&#176</p>
            <p>Max:${data.main.temp_max.toFixed()}&#176</p>`
        weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
        weather__humidity.innerHTML = `${data.main.humidity}%`
        weather__wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph" : "m/s"}`
        weather__pressure.innerHTML = `${data.main.pressure}hPa`
        let mainWeather = data.weather[0].main.toLowerCase();
        const container = document.querySelector('.container');
        container.className = 'container';
        container.classList.add(`weather__${mainWeather}`);
    })
}

window.addEventListener('load', getWeather());


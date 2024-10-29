const apiKey = "e9367c5d3f54724882733114b3246654";

//function to fetch and display the weather data
function getWeather() {
    //Get the city name entered by the user
    const city = document.getElementById("city").value;

    //OpenWeatherMap API URL with city name and API key 
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
    //Fetch weather data 

    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            //Extract and display weather information 
            const weatherOutput = document.getElementById("weather-output");
            weatherOutput.innerHTML =  `
                <h2>Weather in ${data.name}</h2> 
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Feels Like: ${data.main.feels_like}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
             `;
        })
        .catch(erro =>{
            //Display error message if city is not found or other issues 
            document.getElementById("weather-output").innerHTML = `<p>${error.message}</p>`;
        });
}
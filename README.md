# Weather App

This is a dynamic Weather App built with HTML, CSS, and JavaScript, providing real-time weather updates by city. Users can search for any location and instantly receive weather conditions, including temperature, humidity, wind, and pressure. It also includes a theme toggle switch for light/dark mode and temperature unit conversion between Celsius and Fahrenheit.

## Features

- **City-Based Weather Search**: Allows users to search for weather data in various cities.
- **Unit Conversion**: Users can toggle between Celsius and Fahrenheit.
- **Theme Toggle (Dark/Light Mode)**: Provides a smooth transition between dark and light themes.
- **Real-Time Weather Data**: Fetches data from the OpenWeather API for accurate, up-to-date conditions.
- **Responsive Design**: Adjusts layout for various screen sizes, offering an optimal experience across devices.

## Concepts and Skills Covered

This project combines multiple frontend development skills and concepts:
- **DOM Manipulation**: Updating weather data, icon, and temperature units in response to user input.
- **API Integration**: Utilizing the OpenWeather API to fetch and display weather data.
- **Event Handling**: Handling form submissions, theme toggles, and unit conversions.
- **Local Storage**: Storing and retrieving theme preference for consistent user experience.
- **CSS Variables**: Utilizing `:root` variables for theme colors and easy theme toggling.
- **Responsive Design**: Using media queries for responsive layout adjustments.
- **Asynchronous JavaScript (Promises)**: Fetching data asynchronously to avoid blocking the UI.

## Usage

The Weather App provides the following functionalities:
1. **Search for City**: Enter a city name in the search field to get weather details for that city.
2. **Temperature Unit Toggle**: Click on °C or °F to switch between Celsius and Fahrenheit.
3. **Dark/Light Theme Toggle**: Use the toggle switch to switch between dark and light modes.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. **Navigate to the Project Directory**: 
    ```bash
    cd weather-app
3. **Set up API Key**:
    ```bash
    Replace const apiKey in script.js with your own OpenWeather API Key.
4. **Run Locally**:
    ```bash
    Open the index.html file in your browser to start the app

#License 
The project is licensed under the MIT License, which is a permissive license allowing anyone to use, modify, and distribute the code freely. Under MIT:

-You can use this code for personal or commercial projects.
-Modifications and contributions are allowed.
-Attribution to the original author is required when redistributing the code.
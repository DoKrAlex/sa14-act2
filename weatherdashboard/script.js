document.getElementById('weather-form').addEventListener('submit', getWeather);

function getWeather(event) {
    event.preventDefault();
    const cityInput = document.getElementById('city-input').value; // Changed variable name from "city" to "cityInput"
    const apiKey = 'f209137ebfbd4b4085331102242703'; // Replace with your actual API key
    const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`; // Changed variable name from "city" to "cityInput"
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=5`; // Changed variable name from "city" to "cityInput"

    Promise.all([
        fetch(currentUrl).then(response => response.json()),
        fetch(forecastUrl).then(response => response.json())
    ]).then(data => {
        const currentData = data[0];
        const forecastData = data[1];
        displayWeather(currentData, forecastData);
    }).catch(error => console.log('Error fetching weather:', error));
}

function displayWeather(currentData, forecastData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${currentData.location.name}, ${currentData.location.country}</h2>
        <p>Local Time: ${currentData.location.localtime}</p>
        <p>Temperature: ${currentData.current.temp_c}°C</p>
        <p>Condition: ${currentData.current.condition.text}</p>
        <img src="${currentData.current.condition.icon}" alt="Weather Icon">
        <p>Humidity: ${currentData.current.humidity}%</p>
        <h3>5-Day Forecast:</h3>
        <div class="forecast-container">
            ${forecastData.forecast.forecastday.map(day => `
                <div class="forecast-item">
                    <p>Date: ${day.date}</p>
                    <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                    <p>Min Temp: ${day.day.mintemp_c}°C</p>
                    <p>Condition: ${day.day.condition.text}</p>
                    <img src="${day.day.condition.icon}" alt="Weather Icon">
                </div>
            `).join('')}
        </div>
    `;
}

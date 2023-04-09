// Define variables for DOM elements
const locationInput = document.getElementById("location");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

// Function to get weather data from API
function getWeather() {
  // Get the location entered by the user
  const location = locationInput.value;
  
  // Make an API request to get weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a2c3dfd708ff34e7739ccdfede597f31`)
    .then(response => response.json())
    .then(data => {
      // Update DOM elements with weather data
      city.innerText = data.name;
      temperature.innerText = `${data.main.temp}°C`;
      description.innerText = data.weather[0].description;
      icon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    })
    .catch(error => {
      // Display error message if API request fails
      console.error(error);
      alert("Failed to fetch weather data. Please try again later.");
    });
}

// Attach event listener to search button
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", getWeather);

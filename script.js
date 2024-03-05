const input = document.querySelector("#input");
const searchBtn = document.querySelector(".search-btn");
const unit = document.querySelector(".unit");
const weatherStatus = document.querySelector(".weather-status");
const humadity = document.querySelector("#humadity");
const windSpeed = document.querySelector("#wind-speed");
const weatherImage = document.querySelector(".weather-image");
const cityName = document.querySelector(".city-name");
const apiKey = "445596d2c9e327003722650839250ab4";

searchBtn.addEventListener("click", () => {
  showWeather(input.value);
});

async function showWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  if (weather_data.cod == "404") {
    alert("Invalid city name");
  } else {
    unit.innerText = Math.round(weather_data.main.temp);
    weatherStatus.innerText = weather_data.weather[0].description;
    cityName.innerText = weather_data.name;
    humadity.innerText = weather_data.main.humidity;
    windSpeed.innerText = weather_data.wind.speed;
    console.log(weather_data.weather[0].main);

    switch (weather_data.weather[0].main) {
      case "Clouds":
        weatherImage.src = "./assets/cloud.png";
        break;
      case "Clear":
        weatherImage.src = "./assets/clear.png";
        break;
      case "Rain":
        weatherImage.src = "./assets/rain.png";
        break;
      case "Mist":
        weatherImage.src = "./assets/mist.png";
        break;
      case "Snow":
        weatherImage.src = "./assets/snow.png";
        break;
    }
  }
}

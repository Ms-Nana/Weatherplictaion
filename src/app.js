function refreshWeather(response){
let temperatureElement= document.querySelector("#temperature");
let temperature=response.data.temperature.current;
let cityElement =document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement= document.querySelector("#humidity")

cityElement.innerHTML=response.data.city;
descriptionElement.innerHTML=response.data.condtion.description;
humidityElement.innerHTML=`{response.data.temperature.humidity}%`;
temperatureElement.innerHTML=Math.round(temperature);
}

function searchCity(city){
    let apiKey = "2at0eb6f7f4d219a0e23c255o25bdac3";
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML= searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
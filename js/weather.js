const API_KEY = "cf868ba524a34141078d98ee3149cb7c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
      console.log(
        "You live in ",
        data.name,
        "and the weather is ",
        data.weather[0].main
      );
    });
}

function onGeoError() {
  alert("Your location is not detected.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

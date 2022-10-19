const timeZone = document.querySelector(".time-zone");
const temperature = document.querySelector(".temperature-weather");
const temperatureCel = document.querySelector(".temperature-weather-celcius");
const weatherDesc = document.querySelector(".weather-description");

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const proxy = "https://cors-anywhere.herokuapp.com";
    const api = `https://api.weatherapi.com/v1/current.json?key=5258938269d3491985f105732221910&q=${latitude},${longitude}&aqi=no`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        timeZone.innerHTML = data.location.tz_id;
        temperature.innerHTML = data.current.temp_f;
        weatherDesc.innerHTML = data.current.condition.text;
        temperatureCel.innerHTML = data.current.temp_c;
      });
  });
});

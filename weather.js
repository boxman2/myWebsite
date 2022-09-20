const WEATHER_API_KEY = "bd63b0df1e739e61ce1cbc327828e580"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    fetch(url).then((response) =>response.json()).then((data)=> {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}° @ ${data.weather[0].main}`
    })
}
function onGeoFail(){
    alert("Can't find where you live in")
};

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoFail)
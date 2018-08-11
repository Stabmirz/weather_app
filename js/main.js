//select the elements and creat variavles

var cityTitle = document.querySelector(".cityTitle")
var input = document.querySelector("input")
var weather = document.querySelector(".weather")
var image = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humid")
var deg = document.querySelector(".deg")
var API_KEY = "dc5f7b3695d656163a060520063f2850"
var url = "http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}"
var kelvin
var convert = document.querySelector(".convert")
var icons = {
    "Clouds" : "img/cloudy.png",
    "Partly-Cloudy" : "img/partly-cloudy.png",
    "Rain" : "img/rain.png",
    "Snowy" : "img/snow.png",
    "Clear" : "img/sun.png",
    "Thunderstorm" : "img/thunderstorm.png"

  }




 



//define functions
function getWeather(zipCode) {
    //console.log("Press enter and now running getWeather")
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
            cityTitle.textContent = data.name
            //.weather[""0""].main
            weather.textContent = data.weather[0].main
            kelvin = data.main.temp
            temp.textContent = kelvinToFahrenheit()
            humidity.textContent = data.main.humidity
            image.src = icons[data.weather[0].main]
        },
        error: function (error) {
            console.log("there was an eroor")
        }
    })
}
function kelvinToFahrenheit(){
return Math.round((9/5) * (kelvin - 273)) + 32
}
function kelvinToCelcius(){
return Math.round(kelvin-273)
}



//add event addEventListener and call the function
input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        getWeather(input.value)
    }
})
convert.addEventListener('click', function(e){
    //console.log("clicked convert button")
    if(convert.textContent == "Convert to C"){
    //convert to C
    temp.textContent = kelvinToCelcius()
    deg.innerHTML = "&deg;C"
    convert.textContent = "Convert to F"
}else{
//convert to F
temp.textContent = kelvinToFahrenheit()
deg.innerHTML = "&deg;F"
convert.textContent = "Convert to C"
}
})
getWeather('33144')

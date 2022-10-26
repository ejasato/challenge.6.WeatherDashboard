var searchBtn = document.querySelector(".searchBtn");
var APIKey = "a65803527db001e3e768bef4094e444c";
var cityNameEl = document.querySelector(".citySearch");
var lat;
var lon;
// var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
// var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityNameEl +"&appid=" + APIKey;
//when search button is pressed update weather and include city to past city maybe need to save to local storage?

var searchClickHandler = function(event){
    event.preventDefault();
    var cityName = $(this).siblings(".citySearch").val();
    var city;
    localStorage.setItem(city, cityName);
    console.log(cityName);
    if (cityName){
        getLatLon(cityName);
        getWeather(cityName);

    }else {
        alert("City is incorrectly typed please try again");
    }
}

var getLatLon = function(cityName){
    var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=a65803527db001e3e768bef4094e444c";
    fetch(geoURL).then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    var lat = data[0].lat;
                    var lon = data[0].lon;
                    console.log(lat);
                    console.log(typeof lat);
                    console.log(lon);
                    getWeather(lat, lon);
                });
            }else{
                alert("Error:could not find city")
            }
        })
}

var getWeather = function(lat,lon){
    console.log(lat);
    console.log(lon);
    lat=""+lat;
    lon=""+lon;
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=a65803527db001e3e768bef4094e444c&units=imperial";
    console.log(weatherURL);
    fetch(weatherURL).then(function(response){
        if(response.ok){
            console.log(lat);
            console.log(lon);
            response.json().then(function(data){
                console.log(data);
                var weatherIcon=data.list[0].weather[0].icon;
                console.log(weatherIcon);
                inputData(data);
            })
        }
    })
}

var inputData = function(data){
    console.log(data);
    $("#cityDate").text(moment().format("[Tucson] M/D/YYYY"))
     var currentDay = moment().format("D"); console.log(currentDay);

    //  var weatherIcon=(data.weather.icon);
    //  openweathermap.org/img/wn/@2x.png
    //  console.log(weatherIcon);
    // for(i=8;i<40;i+8){
    //     var futureDate=currentday++;
    //     var weatherIcon=data[]
    // }
}
console.log(cityNameEl);
$(".searchBtn").on("click", searchClickHandler);
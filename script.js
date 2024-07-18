const apiKey="73cf12a1bbd4b8ee8a5c09799393fdf2";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox=$("input");
 const searchButton=$("button");
 const imageSelect=$(".weatherReport");

async function checkWeather(city){
    const response=await fetch(apiURL+ city +`&appid=${apiKey}`);

    if(response.status===404){
        $(".error").css("display", "block");
        $(".weather-icon").css("display", "none");
    }
    else{
        var data=await response.json();
        $(".city").text(data.name);
        $(".temp").text(Math.round(data.main.temp)+"°C");
        $(".humidity").text(data.main.humidity+"%");
        $(".wind").text(data.wind.speed+"kmph");

        if (data.weather[0].main === "Clouds") {
            imageSelect.attr("src", "assets/images/clouds.png");
        } else if (data.weather[0].main === "Clear") {
            imageSelect.attr("src", "assets/images/clear.png");
        } else if (data.weather[0].main === "Drizzle") {
            imageSelect.attr("src", "assets/images/drizzle.png");
        } else if (data.weather[0].main === "Mist") {
            imageSelect.attr("src", "assets/images/mist.png");
        } else if (data.weather[0].main === "Rain") {
            imageSelect.attr("src", "assets/images/rain.png");
        } else if (data.weather[0].main === "Snow") {
            imageSelect.attr("src", "assets/images/snow.png");
        } else {
            console.log("Error");
        }

        $(".weather-icon").css("display", "block");
        $(".error").css("display", "none");



    }

    
}

function handleSearch() {
    const city = searchBox.val();
    checkWeather(city);
}

searchButton.click(function(){
    handleSearch();
});

searchBox.keydown(function(event){
    if(event.which=== 13) {
        handleSearch();
    }
    else{
        console.log("Error");
    }
});


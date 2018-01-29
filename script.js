$(document).ready(function() {
    var long;
    var lat
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=0e35b04af175cacb4a6920b89c8b40b4";

            $.getJSON(api, function(data) {
                var city = data.name;
                var temperatureKelv = data.main.temp;
                var temperatureCelc = Math.round(temperatureKelv - 273.15) + " °C";
                var temperatureFar = Math.round(((temperatureKelv - 273.15) + 459.67) / 1.8) + " F";
                var ciel = data.weather[0].main;



                $("#logo").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                $("#city").html(city);
                $("#temp").html(temperatureCelc);
                $("#sky").html(ciel);

                if (ciel === "Drizzle" || "Mist") {
                    $("html").css("backgroundImage", "url(https://airolator.com/wp-content/uploads/2017/05/raindrops-828954_1920-1080x675.jpg)")
                } else if (ciel === "Thunderstorm") {
                    $("html").css("backgroundImage", "url(https://i.redd.it/2hn7rc312vlz.jpg)")
                } else if (ciel === "Rain" || "Shower rain") {
                    $("html").css("backgroundImage", "url(https://i.ytimg.com/vi/J5OSRpRyl6g/maxresdefault.jpg)")
                } else if (ciel === "Snow") {
                    $("html").css("backgroundImage", "url(https://cdn-snowboarding.transworld.net/blogs.dir/442/files/2017/01/28-Oregon-Chris-Wellhausen-08.jpg)")
                } else if (ciel === "Atmosphere" || "Few clouds" || "Scattered clouds" || "Broken clouds") {
                    $("html").css("backgroundImage", "url(https://airolator.com/wp-content/uploads/2017/05/raindrops-828954_1920-1080x675.jpg)")
                } else if (ciel === "Clear" || "Clear sky") {
                    $("html").css("backgroundImage", "url(https://dailyhellas.com/wp-content/uploads/2017/06/weather4-1024x576.jpg)")
                } else if (ciel === "Extreme") {
                    $("html").css("backgroundImage", "url(https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/9/5/0/9500ce2c3f_76223_01-intro-32.jpg)")
                }


                $("#myBtnC").on('click', function() {         
                          $("#temp").html(temperatureCelc);
                })
                 $("#myBtnF").on('click', function() {         
                          $("#temp").html(temperatureFar);
                })


            });
        });
    }
});

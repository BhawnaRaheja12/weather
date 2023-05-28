 const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");


const apiKey = "0e35966e772472b6bfd0f40162841799 ";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


   if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   }
   else{
      var data = await response.json();

   console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

   if(data.weather[0].main == "Clouds"){
      weatherImage.src = "clouds.png";
   }
   else if(data.weather[0].main =="Clear"){
      weatherImage.src = "clear.png"; 
   }
   else if(data.weather[0].main =="Rain"){
      weatherImage.src = "rain.png"; 
   }
   else if(data.weather[0].main =="Drizzle"){
      weatherImage.src = "drizzle.png"; 
   }
   else if(data.weather[0].main =="Mist"){
      weatherImage.src = "mist.png"; 
   }
   else if(data.weather[0].main =="Clear"){
      weatherImage.src = "clear.png"; 
   }
   else if(data.weather[0].main =="Snow"){
      weatherImage.src = "snow.png"; 
   }
   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
   }
  
}
searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
})

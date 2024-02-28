const api="cf14d933a47f98baaea56279966da1fc";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ; 
const inputvalue=document.querySelector(".nav input" );
const searchbutton=document.querySelector(".nav button");
async function weathers(cityname){
 
    const details= await fetch(url+cityname+`&appid=${api}`);
    var fetchdata = await details.json();
    if(details.status == "404"){
        document.querySelector(".wrongcityname").style.display="block";
        document.querySelector(".body").style.display="none";
    
       }
       else{
        document.querySelector(".body h2").innerHTML=fetchdata.name;
        document.querySelector(".cloud p").innerHTML=fetchdata.weather[0].main;
        document.querySelector(".temp p").innerHTML="Temperature : "+Math.round(fetchdata.main.temp) + "°c";
        document.querySelector(".temp img").src="temp.png";

        document.querySelector(".humidity p").innerHTML="Humidity : "+fetchdata.main.humidity+"%";
        document.querySelector(".humidity img").src="humidity.png";
        console.log(fetchdata);
        if(fetchdata.weather[0].main == "Clouds"){
            document.querySelector(".cloud img").src="cloudy.png";
        }
       else if(fetchdata.weather[0].main == "Drizzle"){
            document.querySelector(".cloud img").src="drizzle.png";
        }
        else if(fetchdata.weather[0].main == "Clear"){
            document.querySelector(".cloud img").src="sun.png";
        }
        else if(fetchdata.weather[0].main == "Clouds"){
            document.querySelector(".cloud img").src="snowy.png";
        }
        else if(fetchdata.weather[0].main == "Rain"){
            document.querySelector(".cloud img").src="rain.png";
        }
        else if(fetchdata.weather[0].main == "Mist"){
            document.querySelector(".cloud img").src="moist.png";
        }
       document.querySelector(".wrongcityname").style.display="none";
       document.querySelector(".body").style.display="block";
    }
}
searchbutton.addEventListener("click",()=>{
    weathers(inputvalue.value);
    document.querySelector(".body").style.display="block";
})



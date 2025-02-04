import React, { useEffect, useState } from 'react'
import './Weather.css'


function Weather() {


  const [weatherData , setWeatherData]= useState(false);
  
const search =async(city) =>{
try {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}& units=metric&appid=${import.meta.env.VITE_APP_ID}`;

    const response =await fetch(url);
    const data =await response.json();
    console.log(data);
    const icon =allicons[data.Weather[0].icon] 
    setWeatherData({
        humidity :data.main.humidity,
        windspeed: data.main.wind.speed,
        temperature:math.floor(data.main.temp),
        location: data.name,
      
    })
    
}
catch (error){

}
}
useEffect(()=>{
    search ("new york");

},[]);


  return (
    <div className='body'>
        <div className='Weather'>
        <div className="Search-Bar">
            <input type="text" placeholder='Search' />
            
        </div>
        <div className='weather-icon '>
        <i class="fa-solid fa-cloud"></i>
        </div>
       

     
        <p className='temperature '>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}c</p>

        <div className='weather-data'>
            <div className='col'>
            <i class="fa-solid fa-water"></i>
             <p>{weatherData.humidity}%</p>
             <span>Humidity</span>
             </div>
            

            <div className='col'>
            <i class="fa-solid fa-wind"></i>
                <p>{weatherData.windspeed}km/h</p>
                <span>wind speed</span>
            </div>

            
        </div>
     
    
    </div>
    </div>
  )
}

export default Weather
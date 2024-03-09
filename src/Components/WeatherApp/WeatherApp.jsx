import './WeatherApp.css'
import SearchBox from '../SearchBox/SearchBox'
import InfoBox from '../InfoBox/InfoBox'
import { useState } from 'react'

function WeatherApp() {
  const [weatherInfo, setWeatherInfo]= useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo); //Rerendering new result
  }

  return (
    <div className="main">
    <div className="background"></div>
    <div className="content">
        <h1>Forecastify</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox  info={weatherInfo}/>
    </div>
</div>
  )
}

export default WeatherApp

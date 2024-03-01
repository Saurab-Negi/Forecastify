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
      <h2>Forecastify</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox  info={weatherInfo}/> {/* InfoBox will display weatherInfo using props */}
    </div>
  )
}

export default WeatherApp

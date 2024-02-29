import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

function SearchBox() {
  
  let [city, setCity]= useState("");

  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "7ec376d094813305eeb68d0b4c4ef46d";

  let getWeatherInfo = async () =>{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); //&units=metric: convert into metric data e.g celsius
    let jsonResponse= await response.json();
    let result= {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  }

  let handleChange= (evt) =>{
    setCity(evt.target.value);
  }

  let handleSubmit= (evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  }

  return (
    <div className='SearchBox'>
      <h1>Search for Today Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required />
        <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}

export default SearchBox

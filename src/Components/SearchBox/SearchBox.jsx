import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

function SearchBox() {
  let [city, setCity]= useState("");

  let handleChange= (evt) =>{
    setCity(evt.target.value);
  }

  let handleSubmit= (evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
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

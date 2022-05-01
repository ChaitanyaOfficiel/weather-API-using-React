import React from 'react'
import './index.css';
export default function Form({setCityName}) {
  return (
    <div className='wcont'>
      <h1>Weather App</h1>
        <form className='fcont'>
            <label>Enter your city name : </label>
            <input 
            type='text'
            placeholder="Enter the city name"
            onChange={(e) => setCityName(e.target.value)}
            name="cityName"      
            />
           
        </form>
    </div>
  )
}

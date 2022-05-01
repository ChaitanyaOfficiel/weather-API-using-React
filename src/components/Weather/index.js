import React from 'react'
import { useEffect,useState } from 'react';
import './index.css';
export default function Weather({cityName}) {
 
 
 const[name, setName] = useState('');
    const [wind, setWind] = useState('')
  const [des, setDes] = useState('')
  const [img, setImg] = useState(undefined)
  const [temp, setTemp] = useState(0);
  const [hum,setHum] = useState(0);
useEffect(() => {
  const getInfo = async () => {
    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1207112ee35251d6d2e3be9e0dc5f326`
    const res = await fetch(url);
    const data =  await res.json();
    return data;
  }
const wInfo  = async () => {
  const getData  = await getInfo()
    console.log(getData);
   setWind(getData.wind.speed)
setName(getData.name)
setDes(getData.weather[0].description)
setImg(getData.weather[0].icon)
setTemp(getData.main.feels_like)
setHum(getData.main.humidity)
}
wInfo();

},[cityName])

  return (
   
       <div className='content'>
         <img alt="" src={`http://openweathermap.org/img/w/${img}.png`}/>
        <h1 className='chead'>{name}</h1>
        <p>{temp-273.15}</p>     
     <div className='info'>
     <p>Description: {des}</p>
        <p>Wind speed :{wind}m/s</p>
      <p>Humidity: {hum}</p>
     </div>
        </div>
     
    
  )
}

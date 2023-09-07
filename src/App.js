import React from 'react';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './Pages/Main';

function App() {

const [inpDesc, setInpDesc] = useState("")
const [desc, setDesc] = useState("")

const handleInput = (e) => {
    setDesc(e.target.value)
}
const handleKeyDown = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
        setInpDesc(desc)
        e.target.value = ''
    }
}

  const [info, setInfo] = useState([])
  const [temp, setTemp] = useState("")

  const [data, setData] = useState(null)
  const [hourly, setHourly] = useState(null)

  const [lat, setLat] = useState("")
  const [lon, setLon] = useState("")
  // `https://api.openweathermap.org/data/2.5/weather?q=${inpDesc}&appid=a0c2b522ad262806f14f4175dbda2e63&lang=ru`
  // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0c2b522ad262806f14f4175dbda2e63&lang=ru`
  const key = "a0c2b522ad262806f14f4175dbda2e63"

useEffect(() => {
  const getData = async () => {
    if (lat && lon) {
   try {let {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?${inpDesc ? `q=${inpDesc}` : `lat=${lat}&lon=${lon}`}&appid=${key}&lang=ru`)
    setData(data)}
    catch {
      alert("Нет такого города")
    }
  }}
  getData()
}, [lat,lon, inpDesc])

useEffect(() => {
  const getHourlyData = async () => {
    if (lat && lon) {
   try {let {data} = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10пше&appid=${key}&lang=ru`)
    setHourly(data)}
    catch (e){
      alert(e)
    }
  }}
  getHourlyData()
}, [lat,lon])

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLon(position.coords.longitude)
    })
}


  return (
    <div className="App">
      <Header setDesc={setDesc} handleInput={handleInput} handleKeyDown={handleKeyDown} setInpDesc={setInpDesc}/>
      <Main inpDesc={inpDesc} data={data} hourly={hourly}/>
      
    </div>
  );
}

export default App;

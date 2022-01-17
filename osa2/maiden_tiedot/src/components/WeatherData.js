import React, {useState, useEffect} from 'react'
import axios from "axios"

const WeatherData = ({capital}) => {

    const apiKey = process.env.REACT_APP_API_KEY
  
    const [weather, setWeather] = useState([])
  
    useEffect(() => {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`)
      .then(response => {
        setWeather(response.data)
      }
        )
    }, [])
  
    var windData = ""
    var mainData = ""
  
    if (weather.length !== 0) {
      windData = weather.wind
      mainData = weather.main
    }
  
    return(
      <>
        <h3>
          Weather in {capital}
        </h3>
  
        <b> temperature: </b> {(mainData["temp"]-273).toFixed(2)} °C
        <b> wind: </b> {windData["speed"]} m/s
  
        <p>
          Weather icon no longer available in the API. 
        </p>
  
      </>
    )
  }

  export default WeatherData
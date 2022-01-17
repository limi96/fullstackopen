import WeatherData from './WeatherData'

const CountryDetails = ({country}) => {
    return(
      <>
        <h1>
          {country.name.common}
        </h1>
        Capital: {country.capital} <br></br>
        Area: {country.area}    
  
        <h2>
          Languages: 
        </h2>
      
        <ul>
          {Object.keys(country.languages).map(language => 
            <li key={country.languages[language]} >{country.languages[language]}</li>    
          )}
        </ul>
        
        <img src = {country.flags.png}/>
        <WeatherData capital = {country.capital} />
      </>
    )
  }
  export default CountryDetails


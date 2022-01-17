import React, {useState, useEffect} from 'react'
import axios from "axios"

import Filter from './components/Filter'
import DisplayResults from './components/DisplayResults'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => 
      setCountries(response.data))
      
  }, [])
  
  const handleResultFilter = (event) => {setFilter(event.target.value)}
  
  return (
    <div>
      find countries
      <Filter handleFilter = {handleResultFilter}/>
      <br></br>
      <DisplayResults setQuery = {setFilter} countries = {countries} query = {filter}/>
      
    </div>
  )
}

export default App
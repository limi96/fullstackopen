import CountryDetails from './CountryDetails'

const DisplayResults = ({countries, query: filter, setQuery}) => {

    const resultList = filter === 0 ? [] : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
    if (resultList.length === 0) {
      return (
        <>
        No results with the given query!
        </>
      )
    }
  
    if (resultList.length > 10) {
      return (
        <>
        Too many matches, specify another query
        </>
      )
    }
  
    if (resultList.length === 1) {
      return (
        <CountryDetails country = {resultList[0]}/>
      )
    }
  
    return (resultList.map(country => {
        return (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick = {() => setQuery(country.name.common)} > show </button>
          </div>
        )
      })
    )
  }
  export default DisplayResults
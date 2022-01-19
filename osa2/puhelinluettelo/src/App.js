import React, {useState, useEffect} from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import personService from './services/PersonService'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    personService
    .getAll()
    .then(initialResults => {
      setPersons(initialResults)
    })
  }, [])

  const namesToShow = persons
  
  const filteredList = 
        (newFilter === null) ? namesToShow : 
                               namesToShow.filter(entry => entry?.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addEntry = (event) => {
      event.preventDefault()

      var confirmChange = false 
      const foundPerson = persons.find(get => get.name === newName)

      if (typeof foundPerson !== 'undefined' && foundPerson.name === newName) {
        confirmChange = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    
        if (confirmChange) {
      
          const replacedObject = {...foundPerson, number : newNumber}
          
          personService.changeNumber(replacedObject).then(replaced => {
            const newPersonsList = persons.map(person => person.id === replaced.id ? replaced : person)
            setPersons(newPersonsList)
            setNewName('')
            setNewNumber('')
          })
          
          confirmChange = false 

        }

      }  else {
        const entryObject = {
          name: newName,
          number: newNumber,
          id: persons.length +1
        }
        personService.create(entryObject)
        setPersons(persons.concat(entryObject))
        setNewName('')
        setNewNumber('')
      }            
  }

  const removeEntry = (id, name) => {
      
    var confirmDelete = false
    confirmDelete = window.confirm(`Confirm deletion of ${name}?`)

    if (confirmDelete) {
      personService.deletePerson(id)
        .then(() => {
        const tempPersons = persons.filter(person => person.id !== id)
        setPersons(tempPersons)
        })
    }

  }

  const handleNumberChange =(event) => {setNewNumber(event.target.value)}
  const handleNameChange = (event) =>  {setNewName(event.target.value)}
  const handleFilterChange = (event) => {setNewFilter(event.target.value)}

  return (
    <div>
      
      <h2> Phonebook </h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} /> 

      <h3>Add a new</h3>
      <PersonForm addEntry = {addEntry} newName = {newName} handleNameChange ={handleNameChange} 
        newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons list = {filteredList} removeEntry = {removeEntry} />         

    </div>
  )

}

export default App
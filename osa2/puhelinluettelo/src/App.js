import React, { useState} from 'react'

const Persons = ({list}) => {
  return (
    <div>
      {list.map(entry => <p key={entry.name}> {entry.name} {entry.number} </p> )}
    </div>
  )
}

const Filter = ({newFilter, handleFilterChange}) => {
  return (
    <div>
      filter shown with 
      <form > 
        <input value = {newFilter} onChange = {handleFilterChange}/>
      </form>
    </div>
  )
}

const PersonForm = ({addEntry, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <div> 
      <form onSubmit = {addEntry}> 
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          Number: <input value = {newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setNewFilter] = useState('')

  const namesToShow = persons

  const filteredList = 
        (newFilter === null) ? namesToShow : 
                               namesToShow.filter(entry => entry?.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addEntry = (event) => {
      event.preventDefault()

      if (persons.find(get => get.name === newName)) {
        alert(`${newName} is already added to phonebook`)
      }
      else {
        const entryObject = {
          name: newName,
          number: newNumber,
          id: persons.length +1
        }
        setPersons(persons.concat(entryObject))
        setNewName('')
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
      <Persons list = {filteredList} />         

    </div>
  )

}

export default App
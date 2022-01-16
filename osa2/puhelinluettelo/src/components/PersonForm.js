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

export default PersonForm
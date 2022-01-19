const Persons = ({list, removeEntry}) => {
    return (
      list.map(entry => {
          return (
            <div key={entry.name}>
               {entry.name} {entry.number}
          <button onClick = {() => removeEntry(entry.id, entry.name)}> delete </button>
            </div>
          )
        }
      )
    )
  }

export default Persons
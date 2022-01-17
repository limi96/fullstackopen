const Persons = ({list, removeEntry}) => {
    return (
      list.map(entry => {
          return (
            <div key={entry.name}>
               {entry.name} {entry.number}
          <button onClick = {() => removeEntry(entry.id, entry.name)}> delete </button>
            </div>
          )
          // <Person entry = {entry} removeEntry = {removeEntry} />
        }
      )
    )
  }

// const Person = (entry, removeEntry) => {
//   return (
//     <div key={entry.name}>
//       {entry.name} {entry.number}
//       <button> delete </button>
//       {/* <button onClick = {removeEntry(entry.id, entry.name)}> delete </button> */}
//     </div>
//   )
// }

export default Persons
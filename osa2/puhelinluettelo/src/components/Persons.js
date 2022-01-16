const Persons = ({list}) => {
    return (
      <div>
        {list.map(entry => <p key={entry.name}> {entry.name} {entry.number} </p> )}
      </div>
    )
  }

export default Persons
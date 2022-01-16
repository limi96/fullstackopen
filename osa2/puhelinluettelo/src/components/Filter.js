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

export default Filter
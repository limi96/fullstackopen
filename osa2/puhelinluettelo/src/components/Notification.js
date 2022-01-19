import '../index.css'
const Notification = ({ message, warning }) => {
    if (message === null) {
      return null
    }
  
    if (warning) {
        console.log("WARNING ", warning)
        return (
        <div className='warning'>
            {message}
          </div>
        )
    }
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }
export default Notification
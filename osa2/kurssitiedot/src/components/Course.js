const Header = ({props}) => (
    <h1>
        {props.name}
    </h1>
  )
  
  const Part = ({props}) => (
    <p>
      {props.name} {props.exercises}
    </p>
  )
  
  const Content =({props}) => {
    return (
      <>
      {props.map( part => <Part key={part.id} props={part} />)}
      </>
    )
  }
  
  const Course = ({props}) => {
    return (
      <div>
        <Header  props =  {props}  />
        <Content props =  {props.parts} />
        <Total   props =  {props.parts} />
      </div>
    )
  }
  
  const Total =({props}) => {
    const totalSum = props.reduce(  (first, second) => first + second.exercises,0)
  
    return (
    <b>
        total of {totalSum} exercises
    </b>
    )
  }

  export default Course
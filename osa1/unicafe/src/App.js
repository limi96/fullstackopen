import React, { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td> {text}</td>
    <td> {value}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const average = (good-bad)/sum
  const positive = (good)/(sum)*100

  if (sum === 0) {
    return <p>No feedback given</p>
  }
  
  return(
  <div>
    <h1>statistics </h1>
    <table>
    <tbody>
      
        <StatisticLine text={'good'}      value={good} />
        <StatisticLine text={'neutral'}   value={neutral} />    
        <StatisticLine text={'bad'}       value={bad} />
        <StatisticLine text={'all'}       value={sum} />
        <StatisticLine text={'average'}   value={average} />
        <StatisticLine text={'positive'}  value={positive} />
      
    </tbody>
    </table>
  </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
)

const giveScore = (score, setIncrement) => () => {
    setIncrement(score+1)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
    <Button text="good"    handleClick={giveScore(good,    setGood    )}     />    
    <Button text="neutral" handleClick={giveScore(neutral, setNeutral )}     />
    <Button text="bad"     handleClick={giveScore(bad,     setBad     )}     />    

    <Statistics good={good} neutral = {neutral} bad = {bad} />

    </div>
  )
}

export default App
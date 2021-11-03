import React, { useState } from 'react'


const Button = ({handleClick,text}) => (
  <button onClick={handleClick}> {text}</button>
)

const Anecdote = ({title, anecdote, points}) => {
  return (
    <div>
      <h1> {title} </h1>
      {anecdote}
      <p> has {points} votes </p>
    </div>
  )
}

const findMostPoints = (points) => {
  let max = 0
  let maxIndex = 0

  for (let i = 0; i < points.length; i++) {
    if (points[i] > max) {
      max = points[i]
      maxIndex = i
    }
  }
  return maxIndex
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  
  const maxPointsIndex = findMostPoints(points)

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const givePoint = () => {
      const copy = [...points]
      copy[selected] += 1
      setPoints(copy)
  }

  return (
    <div>
      <Anecdote title='Anecdote of the day' anecdote = {anecdotes[selected]} points = {points[selected]} />

      <Button handleClick={givePoint} text = {'vote'}/>
      <Button handleClick={changeAnecdote} text = {'next anecdote'}/>

      <Anecdote title='Anecdote with the most votes' anecdote = {anecdotes[maxPointsIndex]} points = {points[maxPointsIndex]} />
    </div>
  )  
}


export default App
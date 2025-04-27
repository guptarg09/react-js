import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const increment = () => {
    // setCounter(counter+1)

    // if u want to increment bulk of numbers
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  } 

  const decrement = () => {
    // setCounter(counter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
  }

  return (
    <>
      <h1>ritesh</h1>
      <h2>Counter value: {counter}</h2> 

      <button onClick={increment}>Increse</button>  {/* here we provide refrence of function not 
      increment() because we want to execute the function when button is pressed*/}
      <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default App

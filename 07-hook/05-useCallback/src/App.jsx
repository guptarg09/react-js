import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  //  const getAdjective = (() => {
  //   return "another" + count
  // })
  
  const getAdjective = useCallback(() => {
    return "another" + count
  }, [count])

  return (
    <>
    <Navbar adjective = {adjective} getAdjective = {getAdjective}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App

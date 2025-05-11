import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)   // here ref used for don't reset a to 0 on every render
  const btnRef = useRef()   // ref also facalitate to get an element and modify without dom manipulation

  useEffect(() => {
    a.current = a.current + 1
    console.log(`rendering and the value of a is ${a.current}`)
    btnRef.current.style.backgroundColor = "red"
  }, [])

  return (
    <>
      <div className="card">
        <button ref = {btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() => {btnRef.current.style.display = "none"}}>Change me</button>
      </div>
    </>
  )
}

export default App

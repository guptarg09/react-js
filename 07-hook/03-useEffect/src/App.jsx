import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate((prev) => prev + 1)
    }, 1000)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval)
  }, []) // Only run once on initial mount

  return (
    <>
      <h1>Hello, useEffect</h1>
      {/* Uncomment these if needed */}
      {/* <button onClick={() => setCount(count + 1)}>button</button>
      <p>count: {count}</p> */}
      <h2>You have rendered {update} times!</h2>
    </>
  )
}

export default App

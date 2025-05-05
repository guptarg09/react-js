import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength]  = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = ""

  const passwordGene = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, [length, numberAllowed, characterAllowed, password])

  if(numberAllowed) str += "0123456789"
  if(characterAllowed) str += "!@#$%^&*?"

  for (let i = 0; i < array.length; i++) {
    let char = Math.floor(Math.random() * str.length+1)
    pass = str.chatAt(char)
    
  }
  setPassword(pass)


  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>text</div>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css'

function App() {

  // const [name, setName] = useState("Ritesh")
  const [form, setForm] = useState({email: "", phone: ""})

  const handleClick = () => {
    alert("button clicked");
  }

  const handleMouseOver = () => {
    alert("mouse over the div")
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form) 
  }


  return (
    <>
    <button onClick={handleClick}>click me!</button> 
    <div className="red" onMouseOver={handleMouseOver}>I'm a red div</div> 
    <input type="text" name='email' value={form.email} onChange={handleChange}/>
    <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App

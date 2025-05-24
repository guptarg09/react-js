import { useState } from 'react'
import Navbar from './components/navbar'
// import './App.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    
  }
  const handleDelete = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, {todo, isComplete: false}])
  }
  const handleChange = () => {

  }

  return (
    <>
      <Navbar/>
      <div 
      className='container w-[1200px] mx-auto my-5 bg-violet-200 rounded-xl p-3 min-h-[80vh]'> 
        <div 
        className="addTodo">
          <h2 
          className='text-lg font-bold'>Add a Todo</h2>
          <input 
          className='bg-white w-80' value={todo} type="text" name="" id="" />
          <button 
          onChange={handleChange}
          onClick={handleAdd}
          className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1 mx-2'>
            Add</button>
        </div>
        <h2 
        className='font-bold text-lg mt-10'>Your Todos</h2>
        <div 
        className="todos">
          <div 
          className="todo flex">
            <div 
            className="text">myTodo</div>
            <div 
            className="buttions">
              <button 
              onClick={handleEdit}
              className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1 mx-2'>
                Edit</button>
              <button
              onClick={handleDelete}
              className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1'>
                Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
// import './App.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringfy(todos))
  }

 const handleEdit = (e, id) => {
  const t = todos.find(item => item.id === id); // Find the first match
  if (t) {
    setTodo(t.todo); // Set only the text of the todo
  }
  let newTodos = todos.filter(item => {
      return item.id !== item.id;
    })
    setTodos(newTodos)
    saveToLS()
}
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== item.id;
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, {id: Date.now(), todo, isComplete: false}])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
  const id = parseInt(e.target.name); // convert string to number
  const newTodos = todos.map((item) => {
    if (item.id === id) {
      return { ...item, isComplete: !item.isComplete };
    }
    return item;
  });
  setTodos(newTodos);
  saveToLS()
};


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
          onChange={handleChange}
           className='bg-white w-80' 
           value={todo}
           type="text"/>
          <button 
          onClick={handleAdd}
          className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1 mx-2'>
            Save</button>
        </div>
        <h2 
        className='font-bold text-lg mt-10'>Your Todos</h2>
        <div 
        className="todos">
          {todos.length === 0 && <div className='m-4'>No todos to display</div>}
          {todos.map(item => {
          return(
            <div key={item.id}
            className="todo flex w-1/4 justify-between my-3">
            <div className='flex gap-4 '> 
          <input 
            onChange={handleCheckbox} 
            type="checkbox" 
            checked={item.isComplete} 
            name = {item.id}
            />
            <div 
            className={item.isComplete?"line-through":""}
            style={{ maxWidth: "100px" }}>
              {item.todo}</div>
            </div>   
            <div 
            className="buttons flex h-full">
              <button 
              onClick={(e) => handleEdit(e, item.id)}
              className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1 mx-2'>
                Edit</button>
              <button
              onClick={(e) => handleDelete(e, item.id)}
              className='bg-violet-800 hover:bg-violet-950 transition-all text-white text-sm font-bold rounded-md px-4 py-1'>
                Delete</button>
            </div>
          </div>
          )})}
        </div>
      </div>
    </>
  )
}

export default App

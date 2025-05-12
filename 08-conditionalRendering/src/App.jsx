import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "i am a good todo1"
    },
    {
      title: "hello",
      desc: "i am a good todo2"
    },
    {
      title: "hii",
      desc: "i am a good todo3"
    }
  ])

  // // creating own tag
  // const TODO = ({todo}) => {return (
  //   <>
  //   <div className='todo'>{todo.title}</div>
  //   <div className='todo'>{todo.desc}</div>
  //   </>
  // )}

  return (
    <>
      {showbtn? <button>showbtn is true</button>:<button>showbtn is false</button>}
      {/* {showbtn && <button>i will only appear when second btn clicked</button>} */}
      {}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          toggle btn
        </button>
      </div>
      <div>
        {todos.map( todo => {
          // return <TODO key={todo.title} todo = {todo}/>
          return <div key={todo.title} className='m-4 border border-1 '>
            <div className='todo'>{todo.title}</div>
            <div className='todo'>{todo.desc}</div>
          </div>
        })}
      </div>
    </>
  )
}

export default App

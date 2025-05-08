import { useReducer } from 'react'
import './App.css'

function App() {
  const reducer = (state, action) => {
    if(action.type === 'increment'){
      return state+1
    }
    if(action.type === 'decrement'){
      return state-1
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  // console.log(useReducer())

  return (
    <div className="max-w-md mx-auto p-4 my-8 bg-gray-700 text-orange-500 rounded-lg">
      <button
        className="bg-blue-700 text-white px-4 py-2 mr-2 rounded"
        onClick={() => dispatch({type: 'increment'})}
      >
        Increment
      </button>
      <button
        className="bg-red-700 text-white px-4 py-2 rounded"
        onClick={() => dispatch({type: 'decrement'})}
      >
        Decrement
      </button>
      <div className="mt-6 bg-yellow-600 h-[50px] flex items-center justify-center rounded text-white">
        {count}
      </div>
    </div>
  )
}

export default App

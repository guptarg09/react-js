import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Customfun(){
  return(
    <div>
      <h2>this is my custom function!</h2>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Customfun/>
  </StrictMode>,
)

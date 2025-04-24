import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Customfun(){
  return(
    <div>
      <h2>this is my custom function!</h2>
    </div>
  )
}


const anotherElement = (
  <a href="https://google.com" target= '_blank'>visit google</a>
)
// the above code is converted into the below code format...


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google'
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {anotherElement}
    <Customfun/>
    {reactElement}
  </StrictMode>,
)

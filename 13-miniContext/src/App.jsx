import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './userContext/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>Hello, React!</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App

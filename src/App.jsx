

import './App.css'
import Profile from './componenets/Profile'
import Login from './componenets/login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

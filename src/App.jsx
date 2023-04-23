import { useState } from 'react'

import './App.css'
import Users from './Users'
import UsersForm from './UsersForm'

function App() {

const users = [
  {
    name: 'John',
    email: 'john@e yahoo.com',
    gen: 24
  },
  {
    name: 'Benjamin',
    email: 'benjamin@ gmail.com',
    gen: 24
  }
]

  const [user, setUser] = useState(users)
  const handleAddUser =(newUser)=>{
    setUser(prevUsers => [...prevUsers, newUser])
  }

  return (
    <div className="App">
      <UsersForm handleAddUser={handleAddUser}/>
      <Users users={user}/>
    </div>
  )
}

export default App

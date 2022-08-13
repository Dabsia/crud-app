import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddUser from './components/AddUser/AddUser'
import Home from './components/Home/Home'
import EditUser from './components/EditUser/EditUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = '/add-user' element = {<AddUser />} />
        <Route path = '/edit-user/:userId' element = {<EditUser />} />
      </Routes>
    </div>
  )
}

export default App
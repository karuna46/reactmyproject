import React from 'react'
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import ToDoList from './Components/ToDoList.js'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Material from './Components/Materials.js'
const App = () => {
  return (
    <div>
<Router>
<div>
      <Material/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/ToDoList' element={<ToDoList />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
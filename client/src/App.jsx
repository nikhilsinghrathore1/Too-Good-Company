import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

import {BrowserRouter,Route , Routes} from "react-router-dom"
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
 
    <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path='/home' element = {<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

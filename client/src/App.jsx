import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EnterancePage from './pages/EnterancePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element ={<Register/>} /> */}
      <Route path='/register' element ={<Register/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/home' element ={<Home/>} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

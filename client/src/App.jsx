import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Second from './pages/Second'
import Third from './pages/Third'
import Fourth from './pages/Fourth'
import Fifth from './pages/Fifth'
import Sixth from './pages/Sixth'
import Seventh from './pages/Seventh'
import Eighth from './pages/Eighth'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eighth/>
      <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Second from './pages/Second'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <Second/>
    </>
  )
}

export default App

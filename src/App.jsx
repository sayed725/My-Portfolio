import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='text-4xl text-red-600'>Vite + React</h1>
      <button className='btn'>click me</button>
     
    </>
  )
}

export default App

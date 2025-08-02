import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'>
      <div className='my-10 h-[200px] aspect-square object-fill flex flex-col justify-center'>
        <img className='h-full' src={logo} alt="Logo" />
      </div>
      <div className='text-3xl italic'>
        Project Athena
      </div>
    </div>
  )
}

export default App

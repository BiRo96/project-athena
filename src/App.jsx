import './App.css'
import Splash from './components/splash'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Splash/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App

import './App.css'
import Splash from './components/splash'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Splash/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App

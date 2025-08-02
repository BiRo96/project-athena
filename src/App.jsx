import './App.css'
import Splash from './components/splash'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Container from './components/Container'

function App() {

  return (
    <div className='bg-gray-200 dark:bg-gray-500 h-screen w-screen flex flex-col'>
      <Splash/>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App

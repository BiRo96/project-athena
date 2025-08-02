import './App.css'
import Splash from './components/splash'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Container from './components/Container'

function App() {
  const location = useLocation();

  return (
    <div className='bg-gray-200 dark:bg-gray-500 h-screen w-screen flex flex-col'>
      <Splash/>
      <Navbar activePath={location.pathname}/>
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

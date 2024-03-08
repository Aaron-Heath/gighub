import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import MusicianBio from './pages/MusicianBio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
  
    </>
  )
}

export default App

import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import MusicianBio from './pages/MusicianBio'

function App() {

  return (
    <>
      <main>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </main>
  
    </>
  )
}

export default App

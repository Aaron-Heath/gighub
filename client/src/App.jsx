import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupPage from './pages/SignupPage'
import MusicianBio from './pages/MusicianBio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      {/* <SignupPage /> */}
      <MusicianBio />
      </main>
  
    </>
  )
}

export default App

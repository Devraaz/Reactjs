import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './App.css'
import Homepage from './Components/Homepage'

function App() {

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Herosection />
      <Contact />
    </>
  )
}

export default App

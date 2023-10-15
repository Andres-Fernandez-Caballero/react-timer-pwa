import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import Container from './components/container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar />
       <Container />
       <Footer />
    </div>
  )
}

export default App

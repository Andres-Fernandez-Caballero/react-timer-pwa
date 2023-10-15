import { useState } from 'react'
import './App.css'
import Container from './components/Contanier'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'

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

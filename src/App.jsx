import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Loteria from './Components/Loteria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Loteria />
      
    </div>
  )
}

export default App

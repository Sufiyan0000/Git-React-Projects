import { useState } from 'react'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Created Password Generator</h2>
      <PasswordGenerator />
    </>
  )
}

export default App

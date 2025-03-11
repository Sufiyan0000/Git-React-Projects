import { useState } from 'react'
import './App.css'
import Lottery from './components/lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery />
    </>
  )
}

export default App

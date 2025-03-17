import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { header } from 'express/lib/request'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome To <strong> EliteStore.com</strong></h1>
      
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
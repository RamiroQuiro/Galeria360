import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Config from './views/config/Config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Config/>}/>
        <Route path='/galeria' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

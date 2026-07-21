import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import './styles/navbar.css'
import './styles/carousel.css'
import './styles/Footer.css';

import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import LoginSuccess from './components/LoginSuccess'

function App() {


  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<LoginSuccess />}/> 
      </Routes>

     


    </div>
  )
}

export default App

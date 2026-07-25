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
import OurSchool from './components/about-us/OurSchool'
import VisionMission from './components/about-us/VisionMission'
import Faculty from './components/about-us/Faculty'
import Infarastructure from './components/about-us/Infrastructure'
import PrivacyPolicy from './components/about-us/PrivacyPolicy'
import History from './components/about-us/History'

function App() {


  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<LoginSuccess />}/> 
        <Route path='/our-school' element={<OurSchool />}/> 
        <Route path='/vision-mission' element={<VisionMission />}/> 
        <Route path='/faculty' element={<Faculty />}/> 
        <Route path='/infrastructure' element={<Infarastructure />}/> 
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/> 

      </Routes>

     


    </div>
  )
}

export default App

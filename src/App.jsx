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
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import MidSection from './components/MidSection'
import Footer from './components/Footer'
import PageRoutes from './components/PageRoutes'

function App() {


  return (
    <div>
      <PageRoutes />
    </div >
  )
}

export default App

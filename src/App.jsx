import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mybookself from './components/myBookself/Mybookself'
import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <div>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/myBookself' element={<Mybookself/>}></Route>
   </Routes>
   <Toaster/>
    </div>
  )
}

export default App

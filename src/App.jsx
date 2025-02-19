import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Works from './Pages/Works'
import Skills from './Pages/Skills'
import Sertificates from './Pages/Sertificates'
import Cv from './Pages/Cv'
import Layout from './Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Routes>
     
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route  element={<Works/>} path='/works'></Route>
      <Route  element={<Skills/>} path='/skills'></Route>
      <Route  element={<Sertificates/>} path='/sertificate'></Route>
      <Route  element={<Cv/>} path='/cv'>Cv</Route>
      </Route>
     
    </Routes>
    </>
  )
}

export default App
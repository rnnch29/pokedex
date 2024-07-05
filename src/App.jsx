import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Page 
import Home from './pages/Home';
import Pocket from './pages/Pocket';
import Detail from './pages/Detail';

// Components 
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';

function App() {

  return (
    <>
      <BrowserRouter>
        <Top />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pocket' element={<Pocket />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Quote from './Pages/Quote';
import About from './Pages/About';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

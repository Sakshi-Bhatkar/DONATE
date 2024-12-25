//import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"
import AboutUs from"./components/AboutUs"
import Services from './components/Services';
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Hero/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/services" element={<Services/>}></Route>

      </Routes>
           <Footer/>
      </Router>
    </>
  )
}

export default App;
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter"
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner"
import Banner2 from "./components/Banner/Banner2"
import VideoBanner from"./components/VideoBanner/VideoBanner";
import Blogs from"./Blogs/Blogs"
import Footer from "./components/Footer/Footer"
import AboutUs from"./components/AboutUs"
function MainFile() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/hero" element={<Hero/>}></Route>
        <Route path="/overviewcounter" element={<OverviewCounter/>}></Route>
        <Route path="/ourvision" element={<OurVision/>}></Route>
        <Route path="/banner" element={<Banner/>}></Route>
        <Route path="/banner2" element={<Banner2/>}></Route>
        <Route path="/videobanner" element={<VideoBanner/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
           <Footer/>
      </Router>
    </>
  )
}

export default MainFile;
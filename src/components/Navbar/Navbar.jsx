/* eslint-disable react/jsx-no-undef */
import  {useState} from 'react';

//import { BrowserRouter as Router, Routes,Route,Outlet, Link } from 'react-router-dom';


import { IoMdArrowDropdown } from "react-icons/io";
import { BiPhoneCall} from 'react-icons/bi';
import { HiMenuAlt1 , HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from '../ResponsiveMenu';
import { NavLink } from "react-router-dom";


const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);


 const toggleMenu =() =>{
  setShowMenu(!showMenu);
 };

  return (
    <>
    {/**/}
    
    {/**/}
      <nav className='bg-gradient-to-l from-teal-900 via-teal-800 to-teal-900 text-white w-full border-primary/'>
        <div className="container">
          <div className='flex items-center justify-between h-[70px] py-2'>
            {/*Logo*/}
              <div className='text-2xl md:text-3xl text-white uppercase'>
                <a href="#">Unity<span className='inline-block font-bold text-primary'>Fund</span></a>
              </div>
            {/*Menu*/}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-10'>
                <li className='group relative cursor-pointer'>
                  <a href="#" className='flex items-center gap-[3px] h-[70px]'>
                    Home{" "}
                    <span>
                    <IoMdArrowDropdown className='group-hover:rotate-180 transition-all duration-200' />
                    </span>
                  </a>
                  {/*Dropdown*/}
                  <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className='space-y-3'>
                      
                      <li className='p-2 hover:bg-teal-300'><a href="https://skiblogs00.blogspot.com/" >Blog</a></li>
                      <NavLink to="/services"><li className='p-2 hover:bg-teal-300'>Services</li></NavLink>
                    </ul>
                  </div>
                </li>
                
                
                {/**/}
                <NavLink to="/aboutus" >About Us</NavLink>
                {/**/}
                <li>
                  <div className='flex items-center gap-4'> 
                    {/*icon*/}
                    <div>
                      <BiPhoneCall className='text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/90 p-2'/>
                    </div>
                    {/*Mobile No*/}
                    <div>
                      <p>Talk to Us</p>
                      <p>+91 9075570316</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/*Mobile Section Menu*/}
            <div className="md:hidden flex items-center gap-4">
                {
                  showMenu ? (
                    <HiMenuAlt1 onClick={toggleMenu}
                    className='cursor-pointer transition-all' size={30}
                    />
                  ) : (
                    <HiMenuAlt3 onClick={toggleMenu}
                    className='cursor-pointer transition-all' size={30}
                    />
                  )
                }
            </div>
          </div>  
        </div>  
      </nav>
      {/*Mobile Sidebar Menu*/}
     < ResponsiveMenu showMenu= {showMenu} />
     {/* <Routes>
     <Route path='/' element={<blog/>} />
    </Routes>
  
  <Outlet />
     */}
      
    </>
  )
};

export default Navbar;

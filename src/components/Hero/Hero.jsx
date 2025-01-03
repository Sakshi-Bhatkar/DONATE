import React from 'react';
import { motion } from "motion/react"
import HeroImg from "../../assets/7.jpg"
//import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import VideoBanner from '../VideoBanner/VideoBanner';
import OverviewCounter from"../OverviewCounter/OverviewCounter"
import OurVision from"../OurVision/OurVision"
import Banner from"../Banner/Banner"
import Banner2 from "../Banner/Banner2"
import Blogs from "../../Blogs/Blogs"

const bgStyle ={
    backgroundImage: `url(${HeroImg})`,
    backgroundSize:"cover", 
    backgroundPosition:"top",
    backgroundRepeat:"no-repeat",
    width: "100%",
};

const FadeUp = (delay) =>{
    return{
        initial: {
            opacity:0,
            y:100,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:0.6,
                delay: delay,
                ease:"easeIn"
            },
        }
    }
}

const Hero = () => {
    const [data, setData] = React.useState({
        name:"",
        email:"",
        amount:0,
    });
   
     const handleClick =(e) => {
        const name= e.target.name;
        setData((previousData)=> {
            return{
                ...previousData,
                [name]:e.target.value,
            };
        } );
     };
     const handleSubmit = (e) => {
        e.preventDefault(); // It prevents the user from processing the request by clicking the link.
        console.log(data);

     };

  return (
    <>
  <div style={bgStyle}>
    <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-32 pb-10 md:pt-48'>
        <div className="container ">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
                {/*Hero Text Section*/}
                <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
                    < motion.h1 
                    variants={FadeUp(0.2)}
                    initial="initial"
                    animate="animate"
                    className='text-5xl lg:text-7xl font-bold'> Join Us in Changing Lives</motion.h1>
                    <motion.p
                    variants={FadeUp(0.4)}
                    initial="initial"
                    animate="animate">
                        Unity Funds peer-to-peer fundraising pages are 8 times more likely to convert traffic to a donation than industry benchmarks. Combine those statistics with easy-to-create campaigns with recurring donations, and you should see an uptick in revenue in no time at all..
                    </motion.p>
                    <div className='space-x-4'>
                    <motion.button 
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className='btn-primary'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe--gIDGBipwkFCDhUy3k5lBfEgAi38mPjufzkX_Rn2lQ1N6A/viewform?usp=sharing">Get Started</a></motion.button>

                    <motion.button 
                    variants={FadeUp(0.7)}
                    initial="initial"
                    animate="animate" 
                    className='btn-outline'
                    >Login</motion.button>
                    </div>
                    </div>
                    {/*Form*/}
                    <motion.div 
                            initial={{opacity:0,x:100 }}
                            animate={{opacity:1, x:0 }}
                            transition={{type:"spring", stiffness:100 }} className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
                        <div>
                            <h1 className='text-lg text-center font-semibold'>Quick Donation Form</h1>
                            <div className='flex items-center justify-center gap-8 py-3'>
                                <button onClick={()=>setData({
                                    ...data,amount:1
                                })} className='button-square'>$01</button>
                                <button onClick={()=>setData({
                                    ...data,amount:5
                                })} className='button-square'>$05</button>
                                <button onClick={()=>setData({
                                    ...data,amount:10
                                })} className='button-square'>$10</button>
                                <button onClick={()=>setData({
                                    ...data,amount:99
                                })}  className='button-square'>$99</button>
                            </div>
                            {/*Form */}
                            <div className='space-y-6'>
                               <input type="number"
                               name="amount" id="amount" onChange= {handleClick} placeholder='Amount' defaultValue={1} 
                               value={data.amount}
                               min={1}
                               max={100} 
                               className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'/> 

                               <input type="text" name="name" id="name" onChange= {handleClick} placeholder='Name' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black' />

                               <input type="email" name="email" id="email" onChange= {handleClick} placeholder='Email' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black' />

                               <button className='btn-primary w-full rounded-full' onClick={handleSubmit} >Donate Now</button>
                            </div>
                        </div>
                    </motion.div>
                
                {/*Form Section*/}
            </div>
        </div>
    </div>
  </div> 
  <OverviewCounter/>
  <OurVision/>
  <Banner/>
  <Banner2/>
  <VideoBanner/>
  <Blogs/>
  
  </>
  );
};

export default Hero;


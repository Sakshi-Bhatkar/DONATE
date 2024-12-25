import React from 'react';
import {motion} from "framer-motion";

const fadeAnimation = (delay) =>{
  return {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition: {
        duration:0.6,
        delay:delay,
        ease:"easeInOut",
      },
    },
  }
}
const OurVision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <motion.div 
            variants={fadeAnimation(0.2)}
            initial="initial"
            whileInView="animate"
            className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Vision</h1>
                <p>Take charge of every donation and fundraiser
                Forget clunky systems and outdated technology. Donately’s modern dashboard will help you get more done faster so you can get back to helping your organization succeed. Manage donors, track recurring giving, configure emails, and take control of your day-to-day fundraising activity.</p>
                <a href="#" className='inline-block hover:text-primary border-b hover:border-primary'>
                  Learn More
                </a>
            </motion.div>

            <motion.div 
            variants={fadeAnimation(0.4)}
            initial="initial"
            whileInView="animate" className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Mission</h1>
                <p>Turn any website into a fundraising machine
                Our donations forms and fundraising pages provide a powerful tool to collect online donations. Use our form builder to create multi-step forms, offer payment options such as Apple Pay or Paypal, and customize everything from eCards to confirmation screens. Plus, embedding on tools like Wordpress, Squarespace, and Webflow couldn’t be easier.</p>
                <a href="#" className='inline-block hover:text-primary border-b hover:border-primary'>
                  Learn More
                </a>
            </ motion.div>
            <div></div>
        </div>
    </div>
  )
}

export default OurVision

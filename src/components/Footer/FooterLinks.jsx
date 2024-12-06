import { li } from 'motion/react-client';
import React from 'react'

const FooterLinks = ({ links }) => {
  return (
    <>
      {links.map((link)=> (
        <li
        key={link.name}
        className='cursor-pointer transition-all duration-300 hiver:translate-x-[2px]'>
            <a href="">{link.name}</a>
            </li>
      ))}
    </>
  );
  
};

export default FooterLinks

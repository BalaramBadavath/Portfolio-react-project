import React from 'react'
import logo from '../assets/balaramLogo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/balaram-badavath/" ><FaLinkedin/></a>
            <a href="https://github.com/BalaramBadavath"><FaGithub/></a>
            <a href="https://twitter.com/balaram_3502"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/balaram_19/"><FaInstagram/></a>
        </div>
    </nav>
  ) 
}

export default Navbar
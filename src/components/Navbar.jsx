import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { CgFileDocument } from 'react-icons/cg'
import { Link } from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center  px-4 pr-12 z-10'>
            <div>
                {/* logo here */}
            </div>

            {/* menu */}
            <ul className='hidden md:flex text-white font-bold mr-12'>
                <li>
                    <Link to='home' smooth={true} duration={1000}>Home</Link>
                </li>
                
                <li>
                    <Link to='skills' smooth={true} duration={1000}>Skills</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={1000}>Projects</Link>
                </li>
                <li>
                    <Link to='testimonial' smooth={true} duration={1000}>Testimonial</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={1000}>Contact</Link>
                </li>
            </ul>


            {/* Menubar */}
            <div onClick={handleClick} className=' md:hidden  z-10 cursor-pointer text-white'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* for mobile */}
            <ul className={!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center   bg-black text-white font-bold'}>
                <li className='py-6 text-4xl'>
                    <Link to='home' smooth={true} duration={1000} onClick={handleClick}>Home</Link>
                </li>
               
                <li className='py-6 text-4xl'>
                    <Link to='skills' smooth={true} duration={1000} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='projects' smooth={true} duration={1000} onClick={handleClick}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='testimonial' smooth={true} duration={1000}>Testimonial</Link>
                </li >
                <li className='py-6 text-4xl' >
                    <Link to='contact' smooth={true} duration={1000} onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            {/* for icons */}
            <div className='hidden lg:flex flex-col fixed left-0 top-[35%] '>
                <ul >
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 font-bold'>
                        <a href="https://www.linkedin.com/in/sreeshil-ck/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 font-bold'>
                        <a href="https://github.com/sreeshilck/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 font-bold'>
                        <a href="mailto:sreeshilck777@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 font-bold'>
                                <a href="https://wa.me/9870228169" target="_blank" rel="noreferrer" className='text-white flex justify-between items-center w-full text-gray-300'>
                                   WhatsApp <FaWhatsapp size={30} />
                                </a>
                            </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
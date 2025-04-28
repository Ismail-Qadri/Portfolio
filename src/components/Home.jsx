import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CgFileDocument } from 'react-icons/cg'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Particle from './Particle'




function Home() {
    return (


        <div className='w-full h-fit md:h-screen md:pt-0 flex justify-center items-center bg-black ' id='home' name='home' >
            <Particle />
            {/* hero section */}
            <div className='max-w-[1000px] h-fit mx-auto px-8 flex flex-col md:justify-center pt-5  md:pt-0 md:mt-0 absolute' >

                <div className=' md:pt-0 md:mt-0'>
                <p className='text-white'>Hi, I'm</p>
                <h1 className='md:text-6xl text-4xl font-bold text-white'>Mohammad Ismail Qadri</h1>
                <h2 className='md:text-4xl text-2xl font-bold text-gray-400'>Frontend Developer</h2>
                <p className='max-w-[700px] py-4 text-white pt-14'>
                Frontend Developer with expertise in React, modern JavaScript frameworks, and responsive design. I specialize in building high-performance, visually stunning, and user-centric web applications that prioritize accessibility, scalability, and seamless user experiences. My focus is on creating clean, efficient code that meets both user needs and business goals, driving engagement and growth.
                </p>
                </div>
                {/* button  */}
                <div className='flex flex-row gap-4 ' >
                    
                    <a href='/ismail_resume.pdf' download={true} className='group border-2 py-3 px-6 my-2 flex items-center justify-center text-white w-fit inline-block bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] bg-[#4595eb] rounded-lg relative cursor-pointer'>
                        Resume
                        <span className=''>
                            <CgFileDocument size={20} className='ml-3 text-white' />
                        </span>
                    </a>

                    <Link to='contact' smooth={true} duration={1000} className='group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit inline-block bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] bg-[#4595eb] rounded-lg relative cursor-pointer'>
                        Contact me
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='ml-3 text-white' />
                        </span>
                    </Link>
                </div>

                {/* social icons */}
                <div className='flex mt-8 lg:hidden  items-center'>
                    <ul className='flex '>
                        <li className='w-[20px] h-[60px]   duration-500 text-center'>
                            <a href="https://www.linkedin.com/in/mohammad-ismail-qadri-3902311b4/" target="_blank" rel="noreferrer" className='text-white'>
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]   duration-500 mx-4'>
                            <a href="https://github.com/Ismail-Qadri" target="_blank" rel="noreferrer" className='text-white'>
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]  duration-500'>
                            <a href="mailto:ismailqadri98@gmail.com" className='text-white'>
                                <HiOutlineMail size={32} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px] duration-500 mx-4'>
            <a href="https://wa.me/9870228169" target="_blank" rel="noreferrer" className='text-white'>
                <FaWhatsapp size={30} />
            </a>
        </li>
                    </ul>
                </div>

            </div>
            {/* <Particle /> */}
        </div>

    )
}

export default Home
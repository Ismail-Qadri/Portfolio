import React from 'react'
import HTML from '../assets/img/html.png'
import CSS from '../assets/img/css.png'
import JS from '../assets/img/javascript.png'
import Reacticon from '../assets/img/react.png'
import Github from '../assets/img/github.png'
import Tailwind from '../assets/img/tailwind.png'
import redux from '../assets/img/reduxx.jpg';
import jest from '../assets/img/jest.png';



function Skills() {
    return (
        <>
        <div className='bg-black w-full h-full pt-2 pb-24' id='skills' name='skills'>
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-12 mt-12'>
                <div className='flex justify-center mb-10'>
                    <p className='text-white font-bold text-2xl inline inline-block bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] bg-[#4595eb] rounded-lg relative cursor-pointer p-3'>Skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-center mt-5 mb-12'>
                    <div className='shadow-md hover:shadow-orange-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={HTML} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg'>
                        <img src={CSS} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>CSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={JS} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>JavaScript</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Reacticon} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>React</p>
                    </div>
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={redux} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Redux</p>
                    </div>
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={jest} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Jest</p>
                    </div>
                    
                    <div className='shadow-md hover:shadow-white hover:scale-110 duration-700 rounded-lg'>
                        <img src={Github} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Github</p>
                    </div>
                    
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Tailwind} className='w-14 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>TailwindCSS</p>
                    </div>
                    
                </div>
                </div>
            
        </div>
        </>
    )
}

export default Skills
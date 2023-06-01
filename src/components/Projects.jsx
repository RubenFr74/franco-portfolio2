import React from 'react'
import MoonDollars from '../assets/moon-dollars.jpg'
import Sherpa from '../assets/sherpa.jpg'
import WIP from '../assets/wip.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#023262]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f99709]'>Projects</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div 
                    style={{ backgroundImage: `url(${MoonDollars})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Moon Dollars
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Raeludwig/moon-dollars">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://whispering-garden-84047.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{ backgroundImage: `url(${Sherpa})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Sherpa
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/patrickmc19/sherpa">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://patrickmc19.github.io/sherpa/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{ backgroundImage: `url(${WIP})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Work In Progress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://trex-runner.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://trex-runner.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
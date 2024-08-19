import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import eli from '../assets/eli.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx:auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={eliimage} alt="hero image"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I am a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "Backend Dev",
                    1000,

                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>


        </div>

    </div>
  )
}

export default Hero
import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"

const HeroSection = () => {
  return (
    <main className='hero-section main'>
        <div className='container grid grid-two-cols'>
            <div className='hero-content'>
                <h1 className='heading-xl'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, non.
                </p>
                <button className='btn btn-darken btn-inline bg-white-box'>
                    Start exploring <FaLongArrowAltRight/>

                </button>
            </div>
            <div className='hero-image'>
                <img src="world.png" alt="" srcset="" className='banner-image'/>
            </div>
            </div> 

    </main>
  )
}

export default HeroSection
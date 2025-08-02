import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"

const HeroSection = () => {
  return (
    <div className=' hero-section main'>
        <div className='container grid grid-two-cols'>
            <div className='hero-content'>
                <h1 className='heading-xl'>
                    Explore the world, one Country at a time 
                </h1>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis corporis placeat sequi autem odit consequatur quia officia accusamus sit.
                </p>
                <button className='btn btn-darken btn-inline bg-white-box'>
                    start Exploring <FaLongArrowAltRight/>
                </button>
            </div>
            <div className='hero-image'>
                <img src="/world.png" alt="" />

            </div>
        </div>
    </div>
  )
}

export default HeroSection
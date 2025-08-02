import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"

const HeroSection = () => {
    return (
        <main className='hero-section main '>
            <div className='container grid grid-two-cols'>
                <div className=' hero-content'>
                    <div className='heading-xl'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </div>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quaerat numquam, in veritatis quidem.

                    </p>
                    <button className='btn btn-darken btn-inline bg-white-box'>
                        start exploring <FaLongArrowAltRight />

                    </button>
                </div>
                <div className='hero-image'>
                    <img src="/world.png" alt=" world " srcset="" className='banner-image' />
                </div>
            </div>s

        </main>
    )
}

export default HeroSection
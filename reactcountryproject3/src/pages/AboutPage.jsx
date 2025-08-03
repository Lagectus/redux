import React from 'react'
import countryData from "../static/country.json"

const AboutPage = () => {
  return (
    <section className='section-about container'>
        <h2 className='container-title'>
            Lorem ipsum dolor sit.
        </h2>
        <div className='gradient-cards'>
            {countryData.map((county)=>{
                const {id,countryName,capital,population,interestingFact} =county
                return (
                    <div className='card' key={id}>
                        <div className='container-card bg-blue-box'>
                            <p className='card title'>
                                {countryName}
                            </p>
                            <p><span className='card-description'>Capital:</span>{capital}</p>
                            <p><span className='card-description'>Population:</span>{population}</p>
                            <p><span className='card-description'>Intersting facts:</span>{interestingFact}</p>
                            

                        </div>

                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default AboutPage
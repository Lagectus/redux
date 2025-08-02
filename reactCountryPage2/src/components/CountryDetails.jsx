import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndata } from './postApi';

const CountryDetails = () => {
    const params= useParams();
    const [isPending,startTransition] = useTransition();
    const [country,setCountry] = useState();
    useEffect(()=>{
        startTransition(async()=>{
            const res = await getCountryIndata(params.id)
            console.log(res,"qqqqqq");
            if(res.status === 200){
                setCountry(res.data[0])
            }
            
        })
    },[])
  return (
    <section className='card country-details-card container'>
        <div className='container-card bg-white-box'>
            {country && (
                <div className='country-image grid grid-two-cols'>
                    <img src={country.flags.svg} alt={country.flags.svg} srcset="" className='flag' />
                    <div className='country-content'>
                        <p className='card-title'> {country.name.official}</p>
                    </div>
                    <div className='infoContainer'>
                        <p>
                            <span className='card-description'> Native news</span>
                            {}
                        </p>
                    </div>
                </div>
            )}
        </div>

    </section>
  )
}

export default CountryDetails
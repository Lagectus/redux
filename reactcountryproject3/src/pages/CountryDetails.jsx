import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from "react-router-dom"
import { getCountryIndata } from '../../../reactCountryPage2/src/components/postApi';
import Loader from '../components/Loader';

const CountryDetails = () => {
  const params = useParams()
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  useEffect(
    () => {
      startTransition(async () => {
        const res = await getCountryIndata(params.id)
        console.log(res)
        if (res.status === 200) {
          setCountry(res.data[0])
        }
      })
    }, []
  )
  if (isPending) return (<Loader/>)
  return (
    <section className='card country-details-card container'>
      <div className='container-card bg-white-box'>
        {
          country && (
            <div className='country-image grid grid-two-cols'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <div className='country-content'>
                <p className='card-title'>
                  {country.name.offical}
                </p>
              </div>
              <div className='infoContainer'>
                <p>
                  <span className='card-description'> Native names :</span>
                  {
                    Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(", ")

                  }
                </p>
                <p>
                  <span className='card-description'>population  :</span>
                  {country.population}

                </p>
                <p>
                  <span className='card-description'>captial : :</span>
                  {country.capital[0]}

                </p>
                <p>
                  <span className='card-description'>region  :</span>
                  {country.region}

                </p>
                <p>
                  <span className='card-description'>sub region  :</span>
                  {country.subregion}

                </p>
              </div>

            </div>
          )
        }
      </div>

    </section>
  )
}

export default CountryDetails
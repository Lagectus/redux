import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../components/postApi';
import CountryCard from "../components/CountryCard.jsx"
import Loader from '../components/Loader.jsx';

const Country = () => {
    const [isPending, startTransition] = useTransition();
     const [countries,setCountries] = useState([])
     console.log(countries);
     

     useEffect(()=>{
        startTransition(async()=>{
            const res = await getCountryData()
            setCountries(res.data)
        })
     },[])
     if(isPending)return (<><Loader/></>)
  return (
    <section className='country-section'>
        <ul className='grid grid-four-cols'>
            {countries.map((curCount,idx)=>{
                return <CountryCard country = {curCount}/>
                
            })}
        </ul>

    </section>
  )
}

export default Country
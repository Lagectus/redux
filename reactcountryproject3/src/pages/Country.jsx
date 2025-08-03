import React, { useTransition,useState, useEffect } from 'react'
import { getCountryData } from '../static/postApi'
import CountryCard from "../components/CountryCard.jsx"


export const Country = () => {
    const [isPending,startTransition] = useTransition()
    const [countries,setCountries] = useState([])

    useEffect(()=>{
      startTransition(async()=>{
        const res = await getCountryData()
        console.log(res,"dddds")
        
        setCountries(res.data)
      })
    },[])
  return (
    <ul className='grid grid-four-cols'>
      {
        countries.map((curCountry,idx)=>{
          return <CountryCard country={curCountry} key={idx}/>
        })
      }
    </ul>
  )
}


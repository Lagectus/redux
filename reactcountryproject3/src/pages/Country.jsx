import React, { useTransition,useState, useEffect } from 'react'
import { getCountryData } from '../static/postApi'
import CountryCard from "../components/CountryCard.jsx"
import Loader from "../components/Loader.jsx"
import SearchFilter from "../components/SearchFilter.jsx"


export const Country = () => {
    const [isPending,startTransition] = useTransition()
    const [countries,setCountries] = useState([])

    const [search,setSeach] = useState();
    const [filter,setFilter] = useState("all");

    const searchCountry=(country)=>{
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase())
      }
      return country;
    }

    const filterRegion = (country)=>{
      if(filter === "all") return country
      return country.region === filter
    }

    const filterCountries = countries.filter((country)=>searchCountry(country)&& filterRegion(country))


    useEffect(()=>{
      startTransition(async()=>{
        const res = await getCountryData()
        console.log(res,"dddds")
        
        setCountries(res.data)
      })
    },[])
    if(isPending) return (<Loader/>)
  return (
    <section className='country-section'>
      <SearchFilter search={search} setSeach={setSeach} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
    <ul className='grid grid-four-cols'>
      {
        filterCountries.map((curCountry,idx)=>{
          return <CountryCard country={curCountry} key={idx}/>
        })
      }
    </ul>
    </section>
  )
}


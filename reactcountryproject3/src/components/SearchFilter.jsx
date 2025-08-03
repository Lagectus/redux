import React from 'react'
let regions = ["all","Africa","Asia","Europe","Australia"]

const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries
}) => {
    const handleInputChange = (event)=>{
        event.preventDefault()
        setSearch(event.target.value)
    }
    const handleSelectChange = (event)=>{
        event.preventDefault()
        setFilter(event.target.value)
    }
    const sortCountries = (value)=>{
        const sortCountry = [...countries].sort((a,b)=>{
            return value === "asc" ?
            a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry)
    }
  return (
    <section className='section-searchFilter container'>
        <div>
            <input type="text" placeholder='Search..'
            value={search} onChange={handleInputChange} />
        </div>
        <div>
            <button onClick={()=>sortCountries("asc")}>ASC</button>
        </div>
        <div>
            <button onClick={()=>sortCountries("des")}>des</button>
        </div>
        <div>
            <select className='select-section' value={filter} onChange={handleSelectChange}>
                {
                    regions.map((re)=> {return(<option value= {re}>{re}</option>)})
                }

            </select>
        </div>

    </section>
  )
}

export default SearchFilter
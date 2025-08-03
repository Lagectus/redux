import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <div className='grid navbar-grid'>
            <div className='Logo'>
                <NavLink
                to="/" >
                    <h1>
                    MyAtlas
                    </h1>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/country">country</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
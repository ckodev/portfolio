import React from 'react'
import HomeLogo from '../svgs/HomeLogo'
import { NavLink } from 'react-router-dom'

function Header() {
  return (


    <header>
        <h1 className='sr-only'>ckodev</h1>
        <NavLink to='/'><HomeLogo /></NavLink>
        
    </header>


  )
}

export default Header
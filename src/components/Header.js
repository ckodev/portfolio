import React from 'react'
import HomeLogo from '../svgs/HomeLogo'
// import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (


    <header>
        <h1 className='sr-only'>ckodev</h1>
        <Link to="landing" spy={true} smooth={true}  duration={700} offset={-100}><HomeLogo /></Link>
    </header>


  )
}

export default Header
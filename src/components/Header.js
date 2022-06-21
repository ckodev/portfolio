import React from 'react'
import HomeLogo from '../svgs/HomeLogo'
import { Link } from 'react-router-dom'
// import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom"

function Header() {

  const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [activeClass, setActiveClass] = useState('')

    useEffect(() => {

        const changeAccentColor = () => {
            if (splitLocation[2] === '15') {
                setActiveClass('active flower-box')
            } else if (splitLocation[2] === '14') {
                setActiveClass('active portfolio')
            } else if (splitLocation[2] === '13') {
                setActiveClass('active ghost-bomber')
            } else if (splitLocation[2] === '12') {
                setActiveClass('active mustard')
            } else {
                setActiveClass('')
            }
        }
        changeAccentColor()
    }, [splitLocation])
  return (


    <header>
        <div className="header-content-container">
          <h1 className='sr-only'>ckodev</h1>
          <Link to="/" spy={true} smooth={true}  duration={700} offset={-100}><HomeLogo className={activeClass} /></Link>
        </div>
    </header>


  )
}

export default Header
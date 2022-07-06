import React from 'react'
import HomeLogo from '../svgs/HomeLogo'
import { Link } from 'react-router-dom'
// import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom"
import Nav from '../components/Nav';

function Header() {

  const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [activeClass, setActiveClass] = useState('')
    const [headerClass, setheaderClass] = useState('')



    useEffect(() => {

        const changeAccentColor = () => {
            if (splitLocation[2] === '15') {
                setActiveClass('active fdm')
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

    useEffect(()=> {
        const hiddenHeader = () => {
          if (splitLocation[1] === '') {
            setheaderClass('hidden');
          } else {
            setheaderClass('');
          }
        }
        hiddenHeader();
    }, [splitLocation])

  return (


    <header className={headerClass}>
        <div className="header-content-container">
          <h1 className='sr-only'>ckodev</h1>
          <Link to="/" ><HomeLogo className={activeClass} /></Link>
        </div>

        <Nav />
    </header>


  )
}

export default Header
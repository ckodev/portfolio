import React from 'react'
import {NavLink} from 'react-router-dom'
import AboutIcon from '../svgs/AboutIcon'

import ProjectsIcon from '../svgs/ProjectsIcon'
import ContactIcon from '../svgs/ContactIcon'
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'


function Nav() {


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [activeClass, setActiveClass] = useState('')
    const [navHidden, setNavHidden] = useState('')

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
        const hiddenNav = () => {
          if (splitLocation[0] === '') {
            setNavHidden('hidden');
          }
        }
        hiddenNav();
    }, [splitLocation])

    
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        
        }
        window.addEventListener('resize', handleResize)
      });
    
      

    
  return (
    <div className={`main-nav-container ${navHidden}`}>
        <nav className='main-nav'>
            <ul>
                {/* <li >
                    <NavLink smooth to="/" >
                    <span className='menu-active'></span>
                        <HomeIcon/>
                        <p>Home</p>
                    </NavLink>
                </li> */}
                <li >
                    <NavLink className={windowSize > 899 ? activeClass : ""}   to="/PageAbout" >
                    <span className='menu-active'></span>
                        <AboutIcon/>
                        <p>About</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink className={activeClass} to="/PageProjects" >
                    <span className='menu-active'></span>
                        <ProjectsIcon/>
                        <p>Works</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink className={windowSize > 899 ? activeClass : ""} to="/PageContact" >
                    <span className='menu-active'></span>
                        <ContactIcon/>
                        <p>Contact</p>
                    </NavLink>
                </li>
               
                
            </ul>
        </nav>
    </div>
  )
}

export default Nav
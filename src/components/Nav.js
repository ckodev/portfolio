import React from 'react'
import {NavLink} from 'react-router-dom'
import AboutIcon from '../svgs/AboutIcon'
import HomeIcon from '../svgs/HomeIcon'
import ProjectsIcon from '../svgs/ProjectsIcon'
import ContactIcon from '../svgs/ContactIcon'
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'







function Nav() {


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
    <div >
        <nav className='main-nav'>
            <ul>
                <li >
                    <NavLink smooth to="/" >
                    <span className='menu-active'></span>
                        <HomeIcon/>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/PageAbout" >
                    <span className='menu-active'></span>
                        <AboutIcon/>
                        <p>About</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink className={activeClass}  smooth to="/PageProjects" >
                    <span className='menu-active'></span>
                        <ProjectsIcon/>
                        <p>Projects</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink smooth to="/PageContact" >
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
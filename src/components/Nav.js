import React from 'react'
import {NavLink} from 'react-router-dom'
import AboutIcon from '../svgs/AboutIcon'
import HomeIcon from '../svgs/HomeIcon'
import ProjectsIcon from '../svgs/ProjectsIcon'
import ContactIcon from '../svgs/ContactIcon'


function Nav() {
  return (
    <div>
        <nav className='main-nav'>
            <ul>
                <li>
                    <NavLink to="/">
                    <span className='menu-active'></span>
                        <HomeIcon/>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/1">
                    <span className='menu-active'></span>
                        <AboutIcon/>
                        <p>About</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/2">
                    <span className='menu-active'></span>
                        <ProjectsIcon/>
                        <p>Projects</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/3">
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
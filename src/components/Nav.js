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
                    <NavLink smooth to="/PageProjects" >
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
import React from 'react'
// import {NavLink} from 'react-router-dom'
import AboutIcon from '../svgs/AboutIcon'
import HomeIcon from '../svgs/HomeIcon'
import ProjectsIcon from '../svgs/ProjectsIcon'
import ContactIcon from '../svgs/ContactIcon'
import { Link, animateScroll as scroll } from "react-scroll";




function Nav() {


    
  return (
    <div>
        <nav className='main-nav'>
            <ul>
                <li>
                    <Link to="landing" spy={true} smooth={true}  duration={700} offset={-100}>
                    <span className='menu-active'></span>
                        <HomeIcon/>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="about-me" spy={true} smooth={true} duration={700} offset={-100}>
                    <span className='menu-active'></span>
                        <AboutIcon/>
                        <p>About</p>
                    </Link>
                </li>
                <li>
                    <Link to="project-cards" spy={true} smooth={true} duration={700} offset={-100}>
                    <span className='menu-active'></span>
                        <ProjectsIcon/>
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link to="contact-me" spy={true} smooth={true} duration={700} offset={-100}>
                    <span className='menu-active'></span>
                        <ContactIcon/>
                        <p>Contact</p>
                    </Link>
                </li>
               
                
            </ul>
        </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
        <p>&copy;ckodev</p>
        <a href="https://www.linkedin.com/in/cory-owens-3a4b09240/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/ckodev" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default Footer
import React from 'react'
import MustacheLeft from '../svgs/MustacheLeft'
import MustacheRight from '../svgs/MustacheRight'
import Cko from '../svgs/Cko'
import Dev from '../svgs/Dev'
import Dot from '../svgs/Dot'
import EyeBrowLeft from '../svgs/EyeBrowLeft'
import EyeBrowRight from '../svgs/EyeBrowRight'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'



function PageHome() {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth)
            setWindowSize(window.innerWidth);
        
        }
        window.addEventListener('resize', handleResize)
      });


  return (
    <>
    <Link to="/PageAbout">
            <div className="logo-container">
              
                <MustacheLeft />
                <MustacheRight />
                <Cko/>
                <Dev/>
                <Dot/>
                <EyeBrowLeft/>
                <EyeBrowRight/>
                {windowSize > 899 ? <p>click anywhere...</p> : <p>tap anywhere...</p>  }
                
              
            </div>
      </Link>
    </>
  )
}

export default PageHome
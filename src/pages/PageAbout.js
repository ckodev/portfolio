import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function PageAbout() {


    const [isLoaded, setLoaded] = useState(false)
    
    const restPath = 'http://ckodev.com/ckodev/wp-json/wp/v2/pages/98?_embed';
    const [restData, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoaded(true)
            } else {
                setLoaded(false)
            }
        }
        fetchData()
    }, [])
  
    function scrollToTop() {
      window.scrollTo({top:0, behavior:'smooth'} );
    }
  
    return (
      <>
  
  
        { isLoaded ?
          <div className='entry-content'>
            
            <section className='about-me-container' id='about-me'>
                <h1 className='about-me' onClick={scrollToTop}>{restData.acf.h1}</h1>
                <h2 className=''>{restData.acf.h2}</h2>
                <p className='display-linebreak'>{restData.acf.about_me}</p>
            </section>
  
          </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageAbout
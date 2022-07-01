import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import {FaWaveSquare} from 'react-icons/fa';

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
                <div className="content-container">
                  <div className="h2-container">
                    <h2 className=''>{restData.acf.h2}</h2>
                    <FaWaveSquare/>
                  </div>
                  <div className='display-linebreak text-content' dangerouslySetInnerHTML={{__html:  restData.acf.about_me_wysi}}></div>
                  <p className='location'>Location: {restData.acf.location}</p>
                  <img src={restData._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url} alt="" />
                </div>
            </section>
  
          </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageAbout
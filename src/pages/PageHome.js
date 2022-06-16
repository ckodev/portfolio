import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function PageHome() {


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



  return (
    <>


      { isLoaded ?
        <div className='home-page-content-wrapper'>

          <section className='landing' id='landing'>
              <h2>{restData.id}</h2>
          </section>

        </div>
      : 
        <Loading />
      }


    </>
  )
}

export default PageHome
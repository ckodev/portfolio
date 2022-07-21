import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function PageResume() {

    const [isLoaded, setLoaded] = useState(false)
    
    const restPath = 'https://ckodev.com/ckodev/wp-json/wp/v2/pages/390?_embed';
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

    console.log(restData)

  return (
    <>
    { isLoaded ?

        <div>
            {/* <iframe src={restData.acf.resume.url} /> */}
              
            <iframe src={restData.acf.resume.url} title="Resume"></iframe>
            
        </div>
    : 
    <Loading />
    }
  </>
  )
}

export default PageResume
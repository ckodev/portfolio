import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import ProjectCard from '../components/ProjectCard'


function PageProjects() {


    const [isLoaded, setLoaded] = useState(false)
    
    const restPath = 'https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project?_embed'
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
          <div className='entry-content'>
            <section className='project-cards' id='project-cards'>
                <h2>Featured Projects</h2>
                {restData.map(project=> <ProjectCard key={project.id} project={project}/>)}
                
            </section>
          </div>
        : 
          <Loading />
        }
      </>
    )
  }
  
  export default PageProjects
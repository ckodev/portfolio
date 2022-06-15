import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import ProjectCard from '../components/ProjectCard'

function PageHome() {


  const [isLoadedFirst, setLoadStatus1] = useState(false)
  const [isLoadedSecond, setLoadStatus2] = useState(false)
  const [isLoadedThird, setLoadStatus3] = useState(false)
  


  const restPath = 'http://ckodev.com/ckodev/wp-json/wp/v2/pages/98?_embed';
  const [restData, setData] = useState([])
  
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(restPath)
          if ( response.ok ) {
              const data = await response.json()
              setData(data)
              setLoadStatus1(true)
          } else {
              setLoadStatus1(false)
          }
      }
      fetchData()
  }, [])


  const restPath2 = 'http://ckodev.com/ckodev/wp-json/wp/v2/pages/102?_embed';
  const [restData2, setData2] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(restPath2)
          if ( response.ok ) {
              const data = await response.json()
              setData2(data)
              setLoadStatus2(true)
          } else {
              setLoadStatus2(false)
          }
      }
      fetchData()
  }, [])


  const restPath3 = 'https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project?_embed'
  const [restData3, setData3] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(restPath3)
          if ( response.ok ) {
              const data = await response.json()
              setData3(data)
              setLoadStatus3(true)
          } else {
              setLoadStatus3(false)
          }
      }
      fetchData()
  }, [])


    const copyToClipboard = (content) => {
        const el = document.createElement("textarea");
        el.value = content;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(el);
        
    };

    const handleClick = () => {
        copyToClipboard(restData2.acf.email);
    };




  return (
    <>


      { isLoadedFirst && isLoadedSecond && isLoadedThird ?
        <div className='home-page-content-wrapper'>

          <section className='landing' id='landing'>
              <h2>{restData.acf.title}</h2>
              <p className='display-linebreak'>{restData.acf.about_me}</p>
          </section>

          <section className='about-me' id='about-me'>
              <h2>{restData.acf.title}</h2>
              <p className='display-linebreak'>{restData.acf.about_me}</p>
          </section>

          <section className='project-cards' id='project-cards'>
              <h2>Featured Projects</h2>
              {restData3.map(project=> <ProjectCard key={project.id} project={project}/>)}
          </section>

          <section className='contact-me' id='contact-me'>
              <h2>{restData2.acf.title}</h2>
              <p className='display-linebreak'>{restData2.acf.message}</p>
              <p onClick={handleClick}>ckodeveloper@gmail.com
              </p>
          </section>

        </div>
      : 
        <Loading />
      }
    </>
  )
}

export default PageHome
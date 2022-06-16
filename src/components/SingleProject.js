import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from './Loading';
import ProjectHighlights from './ProjectHighlights';
import Tools from './Tools';
import SliderGallery from './SliderGallery';
// import {Link} from 'react-router-dom' 


function SingleProject() {

    const { id } = useParams();
    const restPath = `https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project/${id}?_embed`
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)



   

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
                console.log(window.location.pathname)
           
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])



  return (

    <>

    { isLoaded ?
  


    <div className='entry-content'>
        
        {/* Project title */}
        <h2>{restData.title.rendered}</h2>

        {/* featured image */}
        <img src={restData._embedded['wp:featuredmedia'][0].source_url} alt={restData._embedded['wp:featuredmedia'][0].alt_text} />

        {/* project overview */}
        <p className='display-linebreak'>{restData.acf.project_overview}</p>

        {/* tools used */}
        <div>{restData.acf.tools.map(tool => <Tools key={tool.id} tool={tool}/>)}</div>

        {/* Links to Live site & git hub */}
        <a href={restData.acf.live_site.url} target="_blank" rel="noreferrer" >{restData.acf.live_site.title}</a>
        <a href={restData.acf.git_hub.url} target="_blank" rel="noreferrer" >{restData.acf.git_hub.title}</a>

        {/* Reflection Section */}
        <h3>{restData.acf.reflection_heading}</h3>
        <p className='display-linebreak'>{restData.acf.project_reflection}</p>  

        {/* Project Highlights */}
        <h2>{restData.acf.project_highlights_heading}</h2>
        <div>{restData.acf.project_highlights.map(highlight => <ProjectHighlights key={highlight.id} highlight={highlight}/>)}</div>

        {/* development section */}
        <h3>{restData.acf.development_heading}</h3>
        <p className='display-linebreak'>{restData.acf.development}</p>

        {/* slider section - links to my other projects */}
        <SliderGallery />
        
        
    </div>

    :

    <Loading />
    }
    </>
  )
    
}

export default SingleProject
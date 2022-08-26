import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from './Loading'
import ProjectHighlights from './ProjectHighlights'
import Tools from './Tools'
import SliderGallery from './SliderGallery'
import { useLocation } from "react-router-dom"
import {NavLink} from 'react-router-dom'
import {FaChevronDown} from 'react-icons/fa';
import Footer from './Footer'



function SingleProject() {

    const { id } = useParams();
    const restPath = `https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project/${id}?_embed`
    const [restData, setData] = useState([])

    const [isLoaded, setLoadStatus] = useState(false)
    const [isLoaded2, setLoaded2] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
           
            } else {
                setLoadStatus(false)
            }
        }

        fetchData()
    }, [restPath])

    
    const restPath2 = 'https://ckodev.com/ckodev/wp-json/wp/v2/ckodev-project?_embed'
    const [restData2, setData2] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath2)
            if ( response.ok ) {
                const data = await response.json()
                setData2(data)
                setLoaded2(true)
                
            } else {
                setLoaded2(false)
            }
        }
        fetchData()
    }, [restPath2])

   


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [activeClass, setActiveClass] = useState('')


    //     const [projectId, setProjectId] = useState('')
    //     const [projectSlug, setProjectSlug] = useState('')
    //     useEffect(() => {
    //         setProjectId(restData.id)
    //         setProjectSlug(restData.slug)
    //     const changeAccentColor = () => {
    //         if (parseInt(splitLocation[2]) === projectId) {
    //             setActiveClass(projectSlug)
    //         } else {
    //             setActiveClass('')
    //         }
    //     }
    //     changeAccentColor()
    //      }, [splitLocation, projectId, projectSlug, restData.id, restData.slug]) 

    //  The above commented out function ^^ is an attempt to accomplish the same task as below in a more dynamic fashion. It works but unfortunatley is noticably slower then the hardcoded version.  
     
        useEffect(() => {
            const changeAccentColor = () => {
                if (splitLocation[2] === '15') {
                    setActiveClass('fdm')
                } else if (splitLocation[2] === '14') {
                    setActiveClass('portfolio')
                } else if (splitLocation[2] === '13') {
                    setActiveClass('ghost-bomber')
                } else if (splitLocation[2] === '12') {
                    setActiveClass('mustard')
                } else {
                    setActiveClass('')
                }
            }
            changeAccentColor()
        }, [splitLocation]) 

    // multi purpose scroll to top  
    function scrollToTop() {
        window.scrollTo({top:0, behavior:'smooth'} );
        setTimeout(toggleTabs, 1000);
    }
  

    // Accordion drop down functionality for project content.
    const [takeawayActive, setTakeawayActive] = useState('active')
    const [highlightActive, sethighlightActive] = useState('')
    const [processActive, setProcessActive] = useState('')


    const toggleTabs = () => {
        setTakeawayActive('active')
        setProcessActive('')
        sethighlightActive('')
    }

    const toggleTakeaway = () => {
        setTakeawayActive(takeawayActive === "" ? "active" : "")
        sethighlightActive("")
        setProcessActive("")
        
    }
    const toggleHighlight = () => {
        setTakeawayActive("")
        sethighlightActive(highlightActive === "" ? "active" : "")
        setProcessActive("")
        
    }
    const toggleProcess = () => {
        setTakeawayActive("")
        sethighlightActive("")
        setProcessActive(processActive === "" ? "active" : "")
        
    }
  


  return (

    <>

    { isLoaded && isLoaded2 ?

    <div className='entry-content'>
        
        <article className='single-project-container'>
            {/* Project title */}
            <h2 className='project-title' onClick={scrollToTop}>{restData.title.rendered} </h2>

            {/* featured image */}
            <section className="image-overview-tool-container">

                <div className="img-overview-container">
                     <img src={restData._embedded['wp:featuredmedia'][0].source_url} alt={restData._embedded['wp:featuredmedia'][0].alt_text} />

                    <div className="overview" id="tab-content">
                        {/* project overview */}
                        <h1>{restData.title.rendered}</h1>
                        <p className='display-linebreak text-content'>{restData.acf.project_overview}</p>
                        <NavLink className="back" to="/PageProjects">&#8810; Back</NavLink>
                    </div>
                </div>

                {/* tools used */}
                <div className='tool-tile-container' id="tab-content">
                    <h2 className='sr-only'>Development Tools</h2>
                    {restData.acf.tools.map((tool, i) => <Tools key={i} tool={tool}/>)}
                </div>

                {/* Links to Live site & git hub */}
                <div className="link-container" id="tab-content">
                    <a className={activeClass} href={restData.acf.live_site.url} target="_blank" rel="noreferrer" >{restData.acf.live_site.title}</a>
                    <a className={activeClass} href={restData.acf.git_hub.url} target="_blank" rel="noreferrer" >{restData.acf.git_hub.title}</a>
                   
                </div>

            </section>

           


        <div className="project-info-container">
                
            <div className='content-under-tabs'>

                <div className={`accordion-section`}>

                    <button  className={`accordion-title ${takeawayActive}`} onClick={toggleTakeaway}>
                        <p>{restData.acf.reflection_heading}</p>
                        <FaChevronDown/>
                    </button>

                   
                    <div className={`accordion-content ${takeawayActive}`}>
                            {/* take aways Section */}
                            <section className={`take-aways`} >
                                <h2>{restData.acf.reflection_heading}</h2>
                     
                                <div className='display-linebreak text-content' dangerouslySetInnerHTML={{__html:  restData.acf.project_reflection}}></div>
                        </section>
                    </div>
                    

                </div>
                <div className={`accordion-section`}>

                    <button className={`accordion-title ${highlightActive}`} onClick={toggleHighlight}>
                        <p>{restData.acf.project_highlights_heading}</p>
                        <FaChevronDown/>
                    </button>

                   
                    <div className={`accordion-content ${highlightActive}`}>
                            {/* Project Highlights */}
                            <section className={`highlights-container`}>
                            <h2>{restData.acf.project_highlights_heading}</h2>
                            <div className='hl'>{restData.acf.project_highlights.map((highlight, i) => <ProjectHighlights param={id} key={i} highlight={highlight}/>)}</div>
                        </section>
                    </div>
                    

                </div>
                <div className={`accordion-section `}>

                    <button className={`accordion-title ${processActive}`} onClick={toggleProcess}>
                        <p>{restData.acf.development_heading}</p>
                        <FaChevronDown/>
                    </button>

                   
                    <div className={`accordion-content ${processActive}`}>
                            {/* develoarticle */}
                        <section className={`development-container`} >
                            <h2>{restData.acf.development_heading}</h2>
                     
                            <div className='display-linebreak text-content' dangerouslySetInnerHTML={{__html:  restData.acf.development}}></div>
                        </section>
                    </div>
                 
                </div>

                <div className="slider-container" onClick={scrollToTop}>
                    <h2>More Projects</h2>
                    <SliderGallery  projectData={restData2} />
                </div>

  
        
            </div>
        </div>
        </article>

        <Footer/>
        
        
    </div>

    :

    <Loading />
    }
    </>
  )
    
}

export default SingleProject
import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import Loading from './Loading'
import ProjectHighlights from './ProjectHighlights'
import Tools from './Tools'
import SliderGallery from './SliderGallery'
import { useLocation } from "react-router-dom"
import {NavLink} from 'react-router-dom'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';



function SingleProject({featuredImage}) {

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

    function scrollToTop() {
        window.scrollTo({top:0, behavior:'smooth'} );
      }


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [activeClass, setActiveClass] = useState('')
 
    useEffect(() => {
        const changeAccentColor = () => {
            if (splitLocation[2] === '15') {
                setActiveClass('flower-box')
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

    const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()   


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

                    <div className="overview">
                        {/* project overview */}
                        <h1>{restData.title.rendered}</h1>
                        <p className='display-linebreak text-content'>{restData.acf.project_overview}</p>
                        <NavLink className="back" to="/PageProjects">&#8810; Back</NavLink>
                    </div>
                </div>

                {/* tools used */}
                <div className='tool-tile-container'>
                    <h2 className='sr-only'>Development Tools</h2>
                    {restData.acf.tools.map(tool => <Tools key={tool.id} tool={tool}/>)}
                </div>

                {/* Links to Live site & git hub */}
                <div className="link-container">
                    <a className={activeClass} href={restData.acf.live_site.url} target="_blank" rel="noreferrer" >{restData.acf.live_site.title}</a>
                    <a className={activeClass} href={restData.acf.git_hub.url} target="_blank" rel="noreferrer" >{restData.acf.git_hub.title}</a>
                </div>

            </section>

           


            <div className="project-info-container">
                


                <TabsUnstyled defaultValue={0} className='content-under-tabs'>
                    <TabsListUnstyled className={`Tabs ${activeClass}`}>
                        <TabUnstyled className={`Tabs__tab ${activeClass} Tab`} onClick={executeScroll}>
                            {restData.acf.reflection_heading}
                        </TabUnstyled>

                        <TabUnstyled className={`Tabs__tab ${activeClass} Tab`} onClick={executeScroll}>
                            {restData.acf.project_highlights_heading}
                        </TabUnstyled>

                        <TabUnstyled className={`Tabs__tab ${activeClass} Tab`} onClick={executeScroll}>
                            {restData.acf.development_heading}
                        </TabUnstyled>
                        
                        <span className={`Tabs__presentation-slider ${activeClass}`} role='presentation'></span>
                    </TabsListUnstyled>

                        <TabPanelUnstyled value={0}>
                            {/* take aways Section */}
                            <section className="take-aways" ref={myRef}>
                                    <h2>{restData.acf.reflection_heading}</h2>
                                    <p className='display-linebreak text-content'>{restData.acf.project_reflection}</p>
                            </section>
                        </TabPanelUnstyled>
                        <TabPanelUnstyled value={1}>
                            {/* Project Highlights */}
                            <section className="highlights-container" ref={myRef}>
                                <h2>{restData.acf.project_highlights_heading}</h2>
                                <div>{restData.acf.project_highlights.map(highlight => <ProjectHighlights key={highlight.id} highlight={highlight}/>)}</div>
                            </section>
                        </TabPanelUnstyled>
                        <TabPanelUnstyled value={2}>
                            {/* develoarticle */}
                            <section className="development-container" ref={myRef}>
                                <h2>{restData.acf.development_heading}</h2>
                                <p className='display-linebreak text-content'>{restData.acf.development}</p>
                            </section>
                        </TabPanelUnstyled>
                </TabsUnstyled>
            </div>



            

            {/* slider section - links to my other projects */}
            <SliderGallery projectData={restData2} />

        </article>
        
        
    </div>

    :

    <Loading />
    }
    </>
  )
    
}

export default SingleProject
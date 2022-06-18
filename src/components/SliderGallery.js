import React from 'react';
import {Link} from 'react-router-dom'



function SliderGallery({projectData}) {

 


  function scrollToTop() {
    window.scrollTo({top:0, behavior:'smooth'} );
  }


  return (

    <section className='slider'>
   
      
        {projectData.map((slide, index) => {
          return(
            <Link to={`/SingleProject/${slide.id}`} onClick={scrollToTop}>
           <img  key={index} className="slider-image" src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={slide._embedded['wp:featuredmedia'][0].alt_text} />
            </Link>
          )
        })}
      

      
    </section>
   
  )
}

export default SliderGallery

